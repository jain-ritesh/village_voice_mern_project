import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1); 
    }
}

export default connectDB;
