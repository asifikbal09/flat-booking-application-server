"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const createBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        flatId: zod_1.z.string({
            required_error: "FlatId is required.",
        }),
    }),
});
const statusEnum = ["PENDING", "BOOKED", "REJECTED"];
const updateBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(statusEnum),
    }),
});
exports.BookingValidation = {
    createBookingValidationSchema,
    updateBookingValidationSchema,
};
