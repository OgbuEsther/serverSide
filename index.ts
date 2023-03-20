import express, { Application, Request, Response } from "express";
import cors from "cors";

const PORT = 2020;

const app: Application = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
