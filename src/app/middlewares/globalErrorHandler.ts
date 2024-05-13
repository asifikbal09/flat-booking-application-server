/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ErrorRequestHandler } from "express";
import config from "../../config";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";
import AppError from "../error/appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorDetails = err;
  let stack = config.env === 'development' ? err?.stack : null;

  if (err instanceof ZodError) {
    const getZodError = handleZodError(err);
    statusCode = getZodError?.statusCode;
    message = getZodError?.message;
  } 
 // else if (err instanceof jwt.JsonWebTokenError) {
//     const gotJWTError = handelJWTError(err);
//     statusCode = gotJWTError.statusCode;
//     message = gotJWTError.message;
//     errorMessage = gotJWTError.errorMessage;
//     errorDetails = null;
//     stack = null;
//   } 
else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message
  } else if (err instanceof Error) {
    message = err?.message;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorDetails,
    stack,
  });
};

export default globalErrorHandler
