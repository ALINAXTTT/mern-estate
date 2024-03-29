import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//Allow JSON as the input of the server
app.use(express.json());

app.listen(3000, () => {
  console.log(process.env.MONGO, "Server is running on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//Create the middleware
/*
err: the error sended to this middleware
req: data from the browser/client
res: response from the server to the client side
next: go to the next middleware
*/
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});
