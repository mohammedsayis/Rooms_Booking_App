import express from 'express';
import {  deleteUser, editUser, getAllUsers, getOneUser } from '../controll/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()
// router.get('/checkAuthentication',verifyToken,(req,res,next)=>{
//     res.send("hello uesr you are logged in")
// })
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get('/checkAdmin',verifyToken,(req,res,next)=>{
//     res.send("hello admin, You are login you can delete all accounts")
// })

//get All users
router.get('/',verifyAdmin ,getAllUsers)
//get one user 
router.get('/:id', verifyUser ,getOneUser)
//Add new user 
// router.post('/add',addUser)
//edit user Details
router.put('/:id', verifyUser ,editUser)
//Delete A user
router.delete('/:id', verifyUser , deleteUser)




export default router

