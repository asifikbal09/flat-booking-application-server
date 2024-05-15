
import { Router } from "express";
import { BookingController } from "./booking.controller";
import auth from "../../middlewares/auth";



const router = Router();

router.post(
  "/booking-applications",
  auth(),
  BookingController.createBooking
);

router.get(
  "/booking-requests",
  auth(),
  BookingController.getAllBooking
);

export const BookingRoutes = router;
