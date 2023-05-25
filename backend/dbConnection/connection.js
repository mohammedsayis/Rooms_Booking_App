import mongoose from "mongoose"


export default async function dataBaseConnection(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/BookingApp')
    console.log('DataBase Connection is succesfully....');
    }catch(error){
        console.log("DataBase canot connected !");
        throw error;
    }
}