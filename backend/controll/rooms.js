import Room from "../models/rooms.js";
import { createError } from "../utils/error.js";
import hotel from "../models/hotel.js";

export const getAllRooms = async (req, res) => {
  try {
    const data = await Room.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const createRoom = async (req, res, next) => {
   console.log("sayis");
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();
    console.log(saveRoom);
    try {
      await hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("sayis");
  } catch (err) {
    next(err);
  }
};
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteRoom = async (req, res,next) => {
    const hotelId = req.params.hotelid;
  try {
     await Room.findByIdAndDelete(req.params.id);
    try{
        await hotel.findByIdAndUpdate(hotelId,{
            $pull: {rooms:req.params.id},
        });
    }catch(err){
        next(err)
    }
    res.send(200).json('Room has Been Deleted')
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getOneRoom = async (req, res) => {
  try {
    const data = await Room.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
