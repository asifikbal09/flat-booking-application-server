
import catchAsync from "../../../shared/catchAsync";
import { BookingServices } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { Request, Response } from "express";

const createBooking = catchAsync(async (req:Request&{user?:any}, res:Response) => {
  const user = req.user
  const result = await BookingServices.createBookingIntoDB(user, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking requests submitted successfully",
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking requests retrieved successfully",
    data: result,
  });
});
const updateBookingStatus = catchAsync(async (req, res) => {
  const { bookingId } = req.params;
  const result = await BookingServices.updateBookingFromDB(bookingId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking request updated successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  updateBookingStatus
};
