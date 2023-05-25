import  Jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    
    if(!token){
        return next(createError(4021, "you are not authenticated"))
    }
    
    Jwt.verify(token.process.env.Jwt,(err,user)=>{
        if(err)
            return next(createError(403, "Token is not Valid"))
        
        req.user = user;
        next()
    })
    
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(403,"you are not authorized"))
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403,"you are Not Authorized"))
        }
    })
}