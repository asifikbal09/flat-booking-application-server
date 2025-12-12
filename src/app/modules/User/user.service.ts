import httpStatus from "http-status";
import config from "../../../config";
import prisma from "../../../shared/prisma";
import AppError from "../../error/appError";
import { IUserPayload } from "./user.interface";
import * as brcypt from "bcrypt";

const createUserIntoDB = async (payload: IUserPayload) => {
  const { name,role, email, password, bio, profession, address, imageUrl } = payload;
  const isUserExist = await prisma.user.findUnique({ where: { email } });

  if (isUserExist) {
    throw new AppError(httpStatus.CONFLICT, "User already exist with this email.");
  }
  const result = await prisma.$transaction(async (transactionClint) => {
    const hashPassword = await brcypt.hash(password, Number(config.saltRound));
    const userInfo = {
      name,
      role: role||"USER",
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
      imageUrl: imageUrl || "asifikbal.jpg",
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
