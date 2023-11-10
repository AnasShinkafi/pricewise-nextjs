import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    
    if(!process.env.MONGODB_UR) return console.log('MONGODB_UTI is not defined');
    
    if(isConnected) return console.log("=> using existing database connection");

    try {
        await mongoose.connect(process.env.MONGODB_UR);
        isConnected = true;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}