
import { Router } from "express";
import { BookingController } from "./booking.controller";
import auth from "../../middlewares/auth";



const router = Router();

router.post(
  "/booking-applications",
  auth(),
  BookingController.createBooking
);

export const BookingRoutes = router;
