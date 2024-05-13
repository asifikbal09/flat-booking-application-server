import httpStatus from "http-status";
import config from "../../../config";
import prisma from "../../../shared/prisma";
import AppError from "../../error/appError";
import { IUserPayload } from "./user.interface";
import * as brcypt from "bcrypt";

const createUserIntoDB = async (payload: IUserPayload) => {
  const result = await prisma.$transaction(async (transactionClint) => {
    const { name, email, password, bio, profession, address } = payload;
    const hashPassword = await brcypt.hash(password, Number(config.saltRound));
    const userInfo = {
      name,
      email,
      password: hashPassword,
    };

    const newUser = transactionClint.user.create({
      data: userInfo,
    });

    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create User.");
    }

    const userProfileInfo = {
      userId: (await newUser).id,
      bio,
      profession,
      address,
    };

    await transactionClint.userProfile.create({ data: userProfileInfo });

    return newUser;
  });

  const userInfoWithoutPassword = prisma.user.findUnique({
    where: {
      id: result.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return userInfoWithoutPassword;
};

export const UserServices = {
  createUserIntoDB,
};
