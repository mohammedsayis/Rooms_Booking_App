import express from "express";

import { createError } from "../utils/error.js";
import { addNewHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel } from "../controll/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()
//Create
router.post('/add', verifyAdmin ,addNewHotel)
//Update
router.put('/update/:id', verifyAdmin ,updateHotel)
//Delete
router.delete('/delete/:id', verifyAdmin ,deleteHotel)
//Get hotel
router.get('/:id' ,getOneHotel)
//Get All hotel
router.get('/', getAllHotels)



export default router;
