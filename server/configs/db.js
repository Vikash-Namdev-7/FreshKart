
import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["8.8.8.8"]);
const connectDB = async ()=> {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected"));

        await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB;