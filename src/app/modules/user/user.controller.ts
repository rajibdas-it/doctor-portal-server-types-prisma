import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      statusCode: httpStatus.OK,
      message: "user retrived successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  getAllUser,
};
