import { ContactModel, Suggestion, User } from "../model/userModel.js"

export const getUserData = async (req, res) => {
    try {
        const user = await User.find({});
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Data Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


export const getSuggestionData = async (req, res) => {
    // console.log(req)
    try {
        const suggestion = await Suggestion.find({});
        if (!suggestion) {
            res.status(400).json({
                success: false,
                message: "Data Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: suggestion,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

export const getContactData = async (req, res) => {
    try {
        const contact = await ContactModel.find({});
        if (!contact) {
            return res.status(400).json({
                success:false,
                message: "Data not Found"
            })
        }

        res.status(200).json({
            success:true,
            message:'Data Found Sucessfuly',
            data: contact
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

// export const getSingleUserData = async (req, res)=>{
//     try{
//         const singleUserData = await User.findById({});
//         if(!singleUserData){
//             res.status(400).json({
//                 success:false,
//                 message: "User Data Not Found"
//             })
//         }
//         res.status(200).json({
//             success:true,
//             data: singleUserData,
//         })

//     }catch(error){
//          res.status(500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }