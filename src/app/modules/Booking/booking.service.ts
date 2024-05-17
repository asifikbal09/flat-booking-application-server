import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { BookingStatus } from "@prisma/client";

const createBookingIntoDB = async (
  user: JwtPayload,
  payload: { flatId: string }
) => {
  const { flatId } = payload;
  await prisma.flat.findUniqueOrThrow({
    where: {
      id: flatId,
    },
  });
  const bookingInfo = {
    userId: user.id,
    flatId,
  };

  const result = await prisma.booking.create({
    data: bookingInfo,
  });

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await prisma.booking.findMany();
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
  });
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  updateBookingFromDB,
};
