import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { UserRoutes } from "./app/modules/User/user.route";
import router from "./app/router";

const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send({message:"Welcome to your dream flat."})
})

app.use("/api",router)

app.use(globalErrorHandler)

export default app;