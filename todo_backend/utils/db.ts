import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";


let mongoServer: MongoMemoryServer;


const connectDB = async () => {
    try {
        mongoServer = await MongoMemoryServer.create();
        const inMemoryDbUrl = mongoServer.getUri();
        await mongoose.connect(inMemoryDbUrl);
        console.log('In-memory MongoDB connected');

    } catch (error: any) {
        console.log(error);
        setTimeout(connectDB, 5000).unref();
    }
};

export default connectDB;
