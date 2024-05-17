
import { Router } from "express";
import { BookingController } from "./booking.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validationRequest";
import { BookingValidation } from "./booking.validation";



const router = Router();

router.post(
  "/booking-applications",
  auth(),
  validateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking
);

router.get(
  "/booking-requests",
  auth(),
  BookingController.getAllBooking
);

router.put(
  "/booking-requests/:bookingId",
  auth(),
  validateRequest(BookingValidation.updateBookingValidationSchema),
  BookingController.updateBookingStatus
);

export const BookingRoutes = router;
