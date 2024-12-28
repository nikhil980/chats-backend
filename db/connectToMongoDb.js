import mongoose from "mongoose";

const connectToMongodb=async()=>{
       
    try{
       await mongoose.connect("mongodb+srv://user2000:plmokn980@cluster0.lcgie.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
       console.log("Mongodb is connected")
    }
    catch(error)
    {
     console.log("Error, connecting to MongoDb");
    }
}
export default connectToMongodb;
