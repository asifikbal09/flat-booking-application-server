"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatValidation = void 0;
const zod_1 = require("zod");
const createFlatValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        squareFeet: zod_1.z.number({
            required_error: "Square feet is required.",
        }),
        totalBedrooms: zod_1.z
            .number({
            required_error: "Total bedroom is required.",
        })
            .int("Total Bad rooms must be a Integer number."),
        totalRooms: zod_1.z
            .number({
            required_error: "Total rooms is required.",
        })
            .int("Total Bad rooms must be a Integer number."),
        utilitiesDescription: zod_1.z.string({
            required_error: "utilitiesDescription is required.",
        }),
        location: zod_1.z.string({
            required_error: "Location is required.",
        }),
        description: zod_1.z.string({
            required_error: "Description is required.",
        }),
        rent: zod_1.z.number({
            required_error: "Rent is required.",
        }),
        advanceAmount: zod_1.z.number({
            required_error: "Advance amount is required.",
        }),
    }),
});
const updateFlatValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        squareFeet: zod_1.z.number().optional(),
        totalBedrooms: zod_1.z.number().int().optional(),
        totalRooms: zod_1.z.number().int().optional(),
        utilitiesDescription: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        availability: zod_1.z.boolean().optional(),
        rent: zod_1.z.number().optional(),
        advanceAmount: zod_1.z.number().optional(),
    }),
});
exports.FlatValidation = {
    createFlatValidationSchema,
    updateFlatValidationSchema
};
