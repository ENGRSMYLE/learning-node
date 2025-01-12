import express, { Application, Request, Response, NextFunction } from "express";
import tourRouter from "./router/tourRouter";
import userRouter from "./router/userRouter";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "./config.evn" });



mongoose
  .connect(
    "mongodb+srv://smyle:WjwkG5L0TAUjSFPQ@cluster.jfltm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster",
    {}
  )
  .then((con) => {
    console.log("Database Connected");
  });

// Database sCHEMA
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  rating: Number,
  price: Number,
});

const Tour = mongoose.model("Tour", tourSchema);

const testTour = new Tour({
  name: "The forest hiJSS",
  rating: 4.9,
  price: 50,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("Error");
  });

const app: Application = express();
const PORT = 3000;

//## Include middleware
app.use(express.json());
app.use("/api/v1/tours/", tourRouter);
app.use("/api/v1/user", userRouter);
app.use(morgan("dev"));

// ### Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
