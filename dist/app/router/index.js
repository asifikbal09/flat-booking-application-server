"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/User/user.route");
const auth_router_1 = require("../modules/auth/auth.router");
const flat_route_1 = require("../modules/Flat/flat.route");
const booking_route_1 = require("../modules/Booking/booking.route");
const userProfile_route_1 = require("../modules/UserProfile/userProfile.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        route: user_route_1.UserRoutes,
    },
    {
        route: auth_router_1.AuthRoutes,
    },
    {
        route: flat_route_1.FlatRoutes,
    },
    {
        route: booking_route_1.BookingRoutes,
    },
    {
        route: userProfile_route_1.UserProfileRoutes,
    },
];
moduleRoutes.forEach((route) => router.use("/", route.route));
exports.default = router;
