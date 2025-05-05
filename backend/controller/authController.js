import { User, Suggestion, ContactModel } from "../model/userModel.js";
// import {userSuggestion}  from "../model/userModel.js";
import bcrypt from 'bcryptjs';
import e, { text } from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import nodemailer from 'nodemailer';



// registration 
export const register = async (req, res) => {
    const { name, email, password, confirmPassword, message, role } = req.body;

    if (password != confirmPassword)
        return res.status(400).json({
            success: false,
            message: "Password are Not matched0"
        })

    try {
        const exstingUser = await User.findOne({ email })
        if (exstingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist",
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            message,
            role
            // confirmPassword:hashedPassword
        })
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal Server Error"
        })
    }
};

// Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please Enter Email And Password"
        });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Not Found",
            })
        }
        // if(req.user.role){
        //    return res.status(200).json({
        //         success:true,
        //         redirect:'/admin-dashbord'
        //     })
        // }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: '7d' }
        )

        res.status(200).json({
            success: true,
            message: "Login SuccessFully",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
        console.log(`User logged in: ${user.name}, Role: ${user.role}`);


    } catch (error) {
        console.error('Login Error: ', error.message)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


export const submitUserSuggestion = async (req, res) => {
    const { name, village, suggestion } = req.body;
    console.log("DAta is: ", req.body);
    //   const suggestion = await Suggestion.findById(suggestionId);

    if (!name || !village || !suggestion) {
        res.status(401).json({
            success: false,
            message: "Please Fill All Fields! "
        });
    }

    try {
        let newSuggestion = new Suggestion({
            name,
            village,
            suggestion
        })
        const saveSuggestion = await newSuggestion.save();
        console.log('Saved Suggestion: ', saveSuggestion);

        res.status(200).json({
            success: true,
            message: "New Suggetion Created Sucesss",
            data: saveSuggestion,
        })

    } catch (error) {
        console.log("error=> ", error.message)
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

};

export const sendEmail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message || !subject) {
            return res.status(400).json({
                success: false,
                message: "All Field Required"
            });
        }
        const contact = new ContactModel({
            name,
            email,
            subject,
            message,
        });

        await contact.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank You for Contacting Us",
            text: `Hello ${name},
          
          Thank you for reaching out to us. We have received your message:
          
          Subject: ${subject}
          Message: ${message}
          
          Our team will contact you shortly.
          
          Best regards,
          Your Company Name
          `,
          };
          

        //send maile
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Some Error is occure', error)
                return res.status(500).json({
                    success: false,
                    message: "Failed to send email",
                });
            } else {
                console.log('Email Send', info.response);
                console.log('Email sent:', info.response);
                return res.status(200).json({
                    success: true,
                    message: "Form submitted and email sent successfully",
                });

            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const deleteSuggetion = async(req,res)=>{
    console.log(req.params)
    try{
        const {id} = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Suggestion ID',
            });
        }
        const deleted = await Suggestion.findByIdAndDelete(id);

        if(!deleted){
            console.error(error)
            return res.status(404).json({
                success:false,
                message:'Suggestion Not Deleted',
            });
        }

        res.status(200).json({
            success:true,
            message:"Suggetion is Deleted Successfully"
        });

    }catch(error){
        console.error('Error Deleting Suggetion: ',error);
        res.status(500).json({
            message:'Server Error'
        });

    }
}