import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { BookingStatus } from "@prisma/client";

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
  const result = await prisma.flat.findMany({
    where: {
      userId,
    },
    include: {
      booking: {
        include: {
          user: {
            select: {
              id: true,
              email: true,
            },
          },
        },
      },
    },
  });

  return result;
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
