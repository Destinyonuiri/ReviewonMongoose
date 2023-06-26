import {Request,Response, response} from "express"
import userModel, { iUser } from "../../model/User"


export const createstudent = async (req:Request<{},{},iUser>,res:Response)=>{
try {
    const {name,age,email,gender,hobbies} = req.body
    const newstudent = await userModel.create({
        name,
        age,
        email,
        hobbies,
        gender,
    })
    res.status(201).json({
        message:"Student added sucessfully",
        data:newstudent
    })
} catch (error) {
    res.status(500).json ({ //500 for internal server error
        message:"error creating student",
        data:error,
})
}}

export const getStudent = async(req:Request,res:Response) =>{
    try {
        const student = await userModel.find()
        return res.status(200).json({
            message:"list of student gotten",
            data:student
        })
    } catch (error) {
      res.status(500).json(error)  
    }
}
export const getOneStudent = async(req:Request,res:Response) =>{
    try {
        const oneStudent = await userModel.findById(req.params.studentID)
        if(!oneStudent){
            return res.status(400).json({
                message:"user not found"
            })
        }else{
            return res.status(200).json
                (oneStudent)} 0
    } catch (error:any) {
      res.status(500).json(error.message)  
    }
}

export const updateStudent = async (req:Request,res:Response) =>{
    try {
        const {name,age} = req.body;
        const addStudent = await userModel.findByIdAndUpdate(
            req.params.studentID,{
                name, 
                age,
            },
            {new:true})
            return res.status(201).json(addStudent)
    } catch (error) { 
        return res.status(404).json
    }
}

//deletin student
export const  deleteStudent = async (req:Request,res:Response) =>{
    try {
        const deleting = await userModel.findByIdAndDelete(req.params.studentID)
        if (!deleting) {
            return res.status(404).json({message:'student not found'})
        } else {
            return res.status(200).json({message:"student deleted sucessfully",data:deleting})
        }
    } catch (error) {
        return res.status(404).json
    }
}
