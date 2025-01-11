import express, { Application, Request, Response } from "express";
import fs from "fs";
import tourRouter  from "./router/tourRouter"
import userRouter from "./router/userRouter";
import morgan from "morgan"
const app: Application = express();
const PORT = 3000;



//## Include middleware

app.use("/api/v1/tours/", tourRouter);
app.use("/api/v1/user", userRouter);

app.use(morgan('dev'));
app.use(express.json());
app.use( (req, res, next) => {
  console.log("Hello From the middleware");
  next();

})

const tours: [ any ] = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, "utf-8")
);
// console.log(tours);

// ### Get all tours
app.get("/api/v1/tours", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    }, 
  });
});

app.get("/api/v1/tours/:id", (req:Request, res:Response) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);
  
  res.status(200).json({
    status: "success",
    data: {
      tour  
    }
  }) 
})


// Handle  Post request 
app.post("/api/v1/tours", (req:Request, res:Response) => {
  const newId = tours[tours.length - 1].id + 1; 
  const newTour = Object.assign({id: newId}, req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json( {
      status: 'success',
      data: {
        tour: newTour
      }
    })
  })


})

//## Handle Patch request
app.patch("/api/v1/tours/:id?", (req: Request, res:Response) => {

})


app.delete("/api/v1/tour/:id", (req:Request, res:Response)=> {
  res.status(204)

})

// ### Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
