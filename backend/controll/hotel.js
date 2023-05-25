import Hotel from '../models/hotel.js'

export const getAllHotels = async (req, res) => {
    try{
        const data = await Hotel.find()
    res.send(data)
    }catch(error){
        console.log(error);
    }
};

export const addNewHotel =async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(error){
        res.status(500).json(error)
    }
} 
export const updateHotel = async (req,res)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updateHotel)
    }catch(error){
        res.status(500).json(error)
    }
}
export const deleteHotel = async (req,res)=>{
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has Been Deleted")
    }catch(error){
        res.status(500).json(error)
    }
}
export const getOneHotel = async (req,res)=>{
    try{
        const data = await Hotel.findById(req.params.id)
        res.status(200).json(data)
    }catch(error){
        console.log(error);
    }
}