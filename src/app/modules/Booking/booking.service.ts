import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { BookingStatus } from "@prisma/client";
import AppError from "../../error/appError";
import httpStatus from "http-status";

const createBookingIntoDB = async (
  user: JwtPayload,
  payload: {
    flatId: string;
    moveInDate: string;
    duration: string;
    numberOfPeople: number;
    message: string | null;
  }
) => {
  const { flatId } = payload;
  await prisma.flat.findUniqueOrThrow({
    where: {
      id: flatId,
    },
  });
  const bookingInfo = {
    userId: user.id,
    flatId: payload.flatId,
    moveInDate: payload.moveInDate,
    duration: payload.duration,
    numberOfPeople: payload.numberOfPeople,
    message: payload.message,
  };

  const result = await prisma.booking.create({
    data: bookingInfo,
    include: {
      user: true,
      flat: true,
    },
  });

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await prisma.booking.findMany({
    include: {
      user: true,
      flat: true,
    },
  });
  return result;
};

const getBookingSingleUserFromDB = async (userId: string) => {
  const result = await prisma.booking.findMany({
    where: {
      userId,
    },
    include: {
      user: true,
      flat: true,
    },
  });
  return result;
};

const getUserFlatsAllBookingFromDB = async (userId: string) => {
  const isUsrExist = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });
  if (!isUsrExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const userFlats = await prisma.flat.findMany({
    where: {
      userId,
    },
  });
  if (userFlats.length) {
    const flatIds = userFlats.map((flat) => flat.id);
    const result = await prisma.booking.findMany({
      where: {
        flatId: {
          in: flatIds,
        },
      },
      include: {
        user: true,
        flat: true,
      },
    });
    return result;
  }

  return [];
};

const updateBookingFromDB = async (
  id: string,
  payload: { status: BookingStatus }
) => {
  await prisma.booking.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.booking.update({
    where: {
      id,
    },
    data: payload,
    include: {
      user: true,
      flat: true,
    },
  });
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  updateBookingFromDB,
  getBookingSingleUserFromDB,
  getUserFlatsAllBookingFromDB,
};
