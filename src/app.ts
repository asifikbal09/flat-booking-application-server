import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/router";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendStatus(200).send({
    success: true,
    statusCode: 200,
    message: "Welcome to your dream flat.",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);

export default app;
