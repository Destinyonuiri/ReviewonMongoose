import { Document,model,Schema } from "mongoose";

export interface iUser extends Document{
    name: String;
    age: number;
    email: String;
    gender: String;
    hobbies: String;    
}

const userSchema: Schema<iUser> = new Schema ({
    name:{type:String,required:[true,'name is required']},
    age:{type:Number,required:true},
    email:{type:String,required:[true,'Email is required'],unique:true},
    gender:{type:String,required: true},
    hobbies:{type: String,}

},
{
timestamps:true
}
)

const userModel = model<iUser>("user",userSchema);
export default userModel;