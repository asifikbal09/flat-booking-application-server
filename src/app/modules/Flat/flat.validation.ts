import { z } from "zod";

const createFlatValidationSchema = z.object({
  body: z.object({
    squareFeet: z.number({
      required_error: "Square feet is required.",
    }),
    totalBedrooms: z
      .number({
        required_error: "Total bedroom is required.",
      })
      .int("Total Bad rooms must be a Integer number."),
    totalRooms: z
      .number({
        required_error: "Total rooms is required.",
      })
      .int("Total Bad rooms must be a Integer number."),
    utilitiesDescription: z.string({
      required_error: "utilitiesDescription is required.",
    }),
    location: z.string({
      required_error: "Location is required.",
    }),
    description: z.string({
      required_error: "Description is required.",
    }),
    rent: z.number({
      required_error: "Rent is required.",
    }),
    advanceAmount: z.number({
      required_error: "Advance amount is required.",
    }),
  }),
});

const updateFlatValidationSchema = z.object({
  body: z.object({
    squareFeet: z.number().optional(),
    totalBedrooms: z.number().int().optional(),
    totalRooms: z.number().int().optional(),
    utilitiesDescription: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    availability:z.boolean().optional(),
    rent: z.number().optional(),
    advanceAmount: z.number().optional(),
  }),
});

export const FlatValidation = {
  createFlatValidationSchema,
  updateFlatValidationSchema
};
