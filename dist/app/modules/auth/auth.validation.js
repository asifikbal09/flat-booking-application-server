"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidations = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: "Email is required.",
        })
            .email("Email must be a valid email address."),
        password: zod_1.z.string({
            required_error: "Password is required.",
        }),
    }),
});
const changePasswordValidationSchema = (zod_1.z.object({
    body: zod_1.z.object({
        currentPassword: zod_1.z.string({
            required_error: "Current password is required.",
        }),
        newPassword: zod_1.z.string({
            required_error: "New password is required.",
        }),
    }),
}));
exports.AuthValidations = {
    loginValidationSchema,
    changePasswordValidationSchema
};
