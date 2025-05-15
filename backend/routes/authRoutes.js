import express from 'express';
import {register, loginUser,submitUserSuggestion, sendEmail, deleteSuggetion, chatBoat} from '../controller/authController.js';
import { isAdmin,authmMiddleware } from '../middleware/authMiddleware.js';
import { getContactData, getSuggestionData, getUserData } from '../controller/getUserData.js';
// import ChatBot from '../../frontend/src/pages/ChatBot.jsx';
// import AdminDashboard from '../../frontend/src/pages/AdminDashboard.jsx';

const router = express.Router();

router.post('/register', register);

router.post('/login',loginUser);

router.post('/chatbot',chatBoat);

router.get('/home',authmMiddleware,isAdmin,(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({
            success:true,
            message:'Welcome Admin Dashbord',
            redirect: '/admin-dashbord'
        })
    }

      // Default response for non-admin users
      return res.status(200).json({
        success: true,
        message: 'Welcome to the Home Page',
        redirect: '/home',
    });
    
    // // console.log("Home Route: ",req.user)
    // res.status(200).json({
    //     success:true,
    //     message:` Wellcome Admin to HOME PAGE`,
    //     })
})

router.post('/suggetion-form',submitUserSuggestion);

router.post('/send-email',sendEmail);

// get Data Apis

router.get('/suggestion',getSuggestionData);
router.get('/user',getUserData);
router.get('/get-contact-data', getContactData);
// router.get('/admin-dashbord',authmMiddleware,isAdmin,(req,res)=>{
//   return  res.status(200).json({
//         success:true,
//         message:"Wellcome To Admin Dashbord",
//     })
// })

// Delete Suggetion
router.delete('/suggestions/:id',deleteSuggetion);
export default router;