import {Router,Response,Request} from "express"
import { createstudent, getOneStudent, getStudent, updateStudent } from "../controller/UserController";

const router = Router();

router.route("/home").get((req:Request,res:Response)=>{
    return res.status(200).json({
        message :"welome on board"
});
})
//creating student  
router.post("/create",createstudent);

//getting all student
router.route("/all").get(getStudent)
export default router;

//getting one student
router.route("/getone/:studentID").get(getOneStudent)

router.patch("/update-profile/:studentID",updateStudent)//patch allows u to edit by single or one place but post u must change everything