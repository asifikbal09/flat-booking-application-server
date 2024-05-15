import { z } from "zod";

const createBookingValidationSchema = z.object({
  body: z.object({
    flatId: z.string({
      required_error: "FlatId is required.",
    }),
  }),
});

const statusEnum = ["PENDING", "BOOKED", "REJECTED"];

const updateBookingValidationSchema = z.object({
  body: z.object({
    status: z.enum(statusEnum as [string, ...string[]]),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
