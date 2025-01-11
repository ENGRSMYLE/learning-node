import express, { Application, Request, Response } from "express";
import tourRouter from "./router/tourRouter";
import userRouter from "./router/userRouter";
import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config({path: ' ./config.env'})

console.log(process.env)

const app: Application = express();
const PORT = 3000;



const en = app.get('env') 



//## Include middleware
app.use(express.json());
app.use("/api/v1/tours/", tourRouter);
app.use("/api/v1/user", userRouter);
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Hello From the middleware");
  next();
});

// ### Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
