import mongoose from "mongoose";

const mongoDbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDbUrl);
        console.log('MongoDB connected');
    } catch (error: any) {
        console.error(error);
        setTimeout(connectDB, 5000).unref();
    }
};

export default connectDB;
