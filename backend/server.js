import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';


dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: process.env.VITE_FRONTEND_URL, // React frontend ka URL
    credentials: true, 
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use((req,res)=>{
     return res.status(404).sendFile(path.join())
})
// app.get('/sample',(req,res)=>{
//     res.send("Ptogram is working fine")
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
