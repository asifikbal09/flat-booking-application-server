import httpStatus from "http-status";
import { ZodError, ZodIssue } from "zod";

const handleZodError = (err: ZodError) => {
  const statusCode = httpStatus.BAD_REQUEST;
  let message: string = "";
  err.issues.forEach(
    (issue: ZodIssue) => (message = message + issue.message + " ")
  );
  return {
    statusCode,
    message,
  };
};

export default handleZodError;
