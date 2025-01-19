import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required.",
      })
      .email("Email must be a valid email address."),
    password: z.string({
      required_error: "Password is required.",
    }),
  }),
});

const changePasswordValidationSchema=(z.object({
  body: z.object({
    currentPassword: z.string({
      required_error: "Current password is required.",
    }),
    newPassword: z.string({
      required_error: "New password is required.",
    }),
  }),
}))

export const AuthValidations = {
  loginValidationSchema,
  changePasswordValidationSchema
};
