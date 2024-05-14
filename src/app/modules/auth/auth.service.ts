import * as brcypt from "bcrypt";
import { ILoginPayload } from "./auth.interface";
import prisma from "../../../shared/prisma";
import AppError from "../../error/appError";
import httpStatus from "http-status";
import { jwtHelpers } from "../../../shared/jwtHelper";
import config from "../../../config";

const loginAndGetToken = async (payload: ILoginPayload) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isPasswordCorrect = await brcypt.compare(
    payload.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Password.");
  }

  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = jwtHelpers.generateToken(
    jwtPayload,
    config.tokenSecret,
    config.expire_in
  );
  const result = {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };

  return result
};

export const AuthServices = {
  loginAndGetToken,
};
