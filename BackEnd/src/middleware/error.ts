import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/index";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware = (
    error: Error & Partial<AppError>,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    const statusCode = error.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
    /* console.log(error.message) */
    let message = error.statusCode ? error.message : "Internal Server Error";

    
    return res.status(statusCode).json({ message });
};

