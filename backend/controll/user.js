import users from "../models/users.js"


export const getAllUsers =async (req,res,next)=>{
    try{
    const ussers = await users.find()
    res.send(ussers)
    }catch(err){
        console.log(err);
    }
} 

export const getOneUser =async(req,res,next)=>{
    try{
        const user = await users.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

// export const addUser = async(req,res)=>{
//     const newUser = new users(req.body)
//     try{
//         const user = await newUser.save()
//         res.status(500).json(user)
//     }catch(err){
//         res.status(500).json(err)
//     }
// }
export const editUser = async(req,res)=>{
    try{
        const editedUser = await users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(editedUser)
    }catch(err){
        res.status(500).json(err)
    }
}
export const deleteUser = async (req,res)=>{
    try{
        console.log(users)
        const deletedUser = await users.findByIdAndDelete(req.params.id)

        res.status(200).json("User has been Dleted")
    }catch(err){
        res.status(500).json(err)
    }
}