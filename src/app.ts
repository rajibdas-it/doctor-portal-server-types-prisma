import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("server running");
});

export default app;
