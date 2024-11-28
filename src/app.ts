import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config(); //Reads .env file and makes it accessible via process.env

app.get("/greet", (req: Request, res: Response) => {
  if (req.query.name) {
    res.status(200).send(`Hello, ${req.query.name}`)
  } else {
    res.send("Hi!");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
