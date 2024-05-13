import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required.",
    }),
    email: z.string({
      required_error: "Email is required",
    }).email("Email must be a valid email address."),
    password: z.string({
      required_error: "Password is required.",
    }),
    bio: z.string({
      required_error: "Bio is required.",
    }),
    profession: z.string({
      required_error: "Profession is required.",
    }),
    address: z.string({
      required_error: "Address is required.",
    }),
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
  }),
});

const updateUserProfileValidationSchema = z.object({
  body: z.object({
    bio: z.string().optional(),
    profession: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
  updateUserProfileValidationSchema,
};
