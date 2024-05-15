import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../../../shared/catchAsync";
import { BookingServices } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createBooking=catchAsync(async(req,res)=>{
    const user=req.user;
    const result = await BookingServices.createBookingIntoDB(user,req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Booking requests submitted successfully",
        data:result
    })
})

export const BookingController={
    createBooking
}