import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import httpStatus from "http-status";
import AppError from "../error/appError";
import { jwtHelpers } from "../../shared/jwtHelper";
import config from "../../config";


const auth = () => {
    return async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization

            if (!token) {
                throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!")
            }

            const verifiedUser = jwtHelpers.verifyToken(token, config.tokenSecret as Secret)

            req.user = verifiedUser;

            next()
        }
        catch (err) {
            next(err)
        }
    }
};

export default auth;