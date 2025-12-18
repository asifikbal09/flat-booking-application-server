import { Router } from "express";
import { BookingController } from "./booking.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validationRequest";
import { BookingValidation } from "./booking.validation";
import { UserRole } from "@prisma/client";

const router = Router();

router.post(
  "/booking-applications",
  auth([UserRole.ADMIN, UserRole.USER]),
  validateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking
);

router.get(
  "/booking-requests",
  auth([UserRole.ADMIN, UserRole.USER]),
  BookingController.getAllBooking
);

router.get(
  "/booking-requests/user",
  auth([UserRole.ADMIN, UserRole.USER]),
  BookingController.getBookingSingleUser
);

router.get(
  "/booking-requests/user/flats",
  auth([UserRole.ADMIN, UserRole.USER]),
  BookingController.getUserFlatsAllBooking
);

router.put(
  "/booking-requests/:bookingId",
  auth([UserRole.ADMIN]),
  validateRequest(BookingValidation.updateBookingValidationSchema),
  BookingController.updateBookingStatus
);

export const BookingRoutes = router;
