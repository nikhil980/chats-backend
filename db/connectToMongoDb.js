import mongoose from "mongoose";

const connectToMongodb=async()=>{
       const MONGO_DB_URI="mongodb+srv://user2000:plmokn980@cluster0.lcgie.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";
    try{
       await mongoose.connect(MONGO_DB_URI);
       console.log("Mongodb is connected")
    }
    catch(error)
    {
     console.log("Error, connecting to MongoDb");
    }
}
export default connectToMongodb;
