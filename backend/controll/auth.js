import usrers from "../models/users.js";
import bcrypt from "bcrypt";
// import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new usrers({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();

    res.status(200).send("User has been created ");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
   
    const user = await usrers.findOne({ userName: req.body.userName });
    console.log(user);
    if (!user) 
    return res.status(404).json("user not found")

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("wrong password or userName")

      let secretKey = process.env.JWT_SECRET_KEY
      
      const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, secretKey)
      const {password, isAdmin , ...otherDetails} = user._doc
    res.cookie("access_token", token,{
      httpOnly:true,
    } ).status(200).send({...otherDetails});
  } catch (err) {
    next(err);
  }
};

