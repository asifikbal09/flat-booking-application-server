import { Router } from "express";
import validateRequest from "../../middlewares/validationRequest";
import { FlatValidation } from "./flat.validation";
import auth from "../../middlewares/auth";
import { FlatController } from "./flat.controller";
import { UserRole } from "@prisma/client";

const router = Router();

router.post(
  "/flats",
  auth([UserRole.ADMIN, UserRole.USER]),
  validateRequest(FlatValidation.createFlatValidationSchema),
  FlatController.createFlat
);

router.get("/flats", FlatController.getAllFlat);

router.get("/flats/:flatId", FlatController.getSingleFlat);

router.put(
  "/flats/:flatId",
  auth([UserRole.ADMIN, UserRole.USER]),
  validateRequest(FlatValidation.updateFlatValidationSchema),
  FlatController.updateFlat
);

export const FlatRoutes = router;
