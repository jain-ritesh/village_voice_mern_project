import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';


dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173", // React frontend ka URL
    credentials: true, 
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

// app.get('/sample',(req,res)=>{
//     res.send("Ptogram is working fine")
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
