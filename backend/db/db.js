import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // जरूर करो

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1); // Server crash कर देगा ताकि गलती दिखे
    }
}

export default connectDB;
