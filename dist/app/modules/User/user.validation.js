"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required.",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
        }).email("Email must be a valid email address."),
        password: zod_1.z.string({
            required_error: "Password is required.",
        }),
        bio: zod_1.z.string({
            required_error: "Bio is required.",
        }),
        profession: zod_1.z.string({
            required_error: "Profession is required.",
        }),
        address: zod_1.z.string({
            required_error: "Address is required.",
        }),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
    }),
});
const updateUserProfileValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bio: zod_1.z.string().optional(),
        profession: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    createUserValidationSchema,
    updateUserValidationSchema,
    updateUserProfileValidationSchema,
};
