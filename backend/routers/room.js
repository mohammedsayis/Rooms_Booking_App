import express from 'express';

import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getAllRooms, getOneRoom, updateRoom } from '../controll/rooms.js';

const router = express.Router()

//get all rooms
router.get('/',getAllRooms)

//create New Room 
router.post('/:hotelId',(req,res)=>{
    res.send("sayis")
})

//Update Room
router.put('/:id',updateRoom)

//Delete Room 
router.delete('/:id',deleteRoom)

//Get One Room
router.get('/:id',getOneRoom)

router.get('/ab',(req,res)=>{
    res.send("sayis")
})

export default router