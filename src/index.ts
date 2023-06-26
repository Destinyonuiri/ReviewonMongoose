import express,{Application} from "express"
import appConfig from "./App";
import dbConfig from "./config/DB";

const port = 4000;
const app:Application = express();
const server = async()=>{
try {
    appConfig(app); //app initialization
    dbConfig() //initialize db

    //server listening 
    app.listen(port, ()=>{
        console.log(`server is listening on ${port}`)
    });
} catch (error) {
    console.log("error")
} 
};

// server initialization
server();