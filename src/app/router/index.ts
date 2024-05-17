import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/auth/auth.router";
import { FlatRoutes } from "../modules/Flat/flat.route";
import { BookingRoutes } from "../modules/Booking/booking.route";
import { UserProfileRoutes } from "../modules/UserProfile/userProfile.route";

const router = Router();

const moduleRoutes = [
  {
    route: UserRoutes,
  },
  {
    route: AuthRoutes,
  },
  {
    route: FlatRoutes,
  },
  {
    route: BookingRoutes,
  },
  {
    route: UserProfileRoutes,
  },
];

moduleRoutes.forEach((route) => router.use("/", route.route));

export default router;
