import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";

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

export const BookingServices = {
  createBookingIntoDB,
};
