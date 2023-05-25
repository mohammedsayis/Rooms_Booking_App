import express, { json } from "express";
import dataBaseConnection from "./dbConnection/connection.js";
import authRoute from './routers/auth.js'
import hotel from "./routers/hotel.js";
import room from "./routers/room.js";
import users from "./routers/userRouter.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()


//middlewares
app.use(cookieParser())
app.use(express.json())
app.use('/api/Auth',authRoute)
app.use('/api/users',users)
app.use('/api/hotels',hotel)
app.use('/api/rooms',room)

const PORT = process.env.PORT || 3000; //Assign Port Number 
await dataBaseConnection()
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
