import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import router from "./routers/auth.routers.js";
import connectToMongodb from "./db/connectToMongoDb.js";
import MessageRouter from "./routers/message.routes.js";
import cookieParser from "cookie-parser";
import UserRouter from "./routers/user.routers.js";
import { app,server } from "./scoket.js/socket.js";


const PORT=process.env.PORT||5000;

const ___dirname=path.resolve();

dotenv.config();

const allowedOrigins = ['http://localhost:3000', 'https://nikhil980.github.io/chats'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: corsOptions, 
 credentials: true // Allows cookies to be sent with requests 
 }));
app.use("/api/users",UserRouter);
app.use("/api/auth",router);
app.use("/api/messages",MessageRouter);

// app.use(express.static(path.join (___dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
// })

 
server.listen(PORT,()=>
{
    connectToMongodb();
    console.log("You are live at Port :5000")
}      
)
