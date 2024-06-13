import mongoose, { Mongoose } from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to mongodb")
        
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message)
    }
}
export default connectToMongoDB;