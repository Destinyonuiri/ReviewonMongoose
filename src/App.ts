import express,{Application} from "express";
import cors from "cors";
import router from "./router/UserRouter";

const appConfig = (app:Application)=>{

    app
    // middlewares
    .use(express.json())
    .use(cors())

    //router
    .use("/api/", router)

}

export default appConfig