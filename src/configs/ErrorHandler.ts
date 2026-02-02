import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";

export const ErrorHandler = (
  err: Error | ApiError,
  req: Request, 
  res: Response, 
  next: NextFunction): void => {
    const statuscode = err instanceof ApiError ? err.statuscode : 500;
    const isDev = process.env.ENV === "development";

    const response: {statuscode: number, success: boolean, message: string, stack?: any, errors?: any[]} = {
      statuscode,
      success: false,
      message: err.message || 'something went wrong'
    }

    if(err instanceof ApiError) {
      if(err.errors)
        response.errors = err.errors
    }

    if (isDev) {
      response.stack = err.stack;
    }

    res.status(statuscode).json(response)
}