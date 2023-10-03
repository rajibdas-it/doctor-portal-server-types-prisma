import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import doctorPorltalRoutes from "./app/routes";

const app: Application = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

//cors
app.use("*", cors(corsOptions));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", doctorPorltalRoutes);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome HTTP SERVER",
  });
});

export default app;
