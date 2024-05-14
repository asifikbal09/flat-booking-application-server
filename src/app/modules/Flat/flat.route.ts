import { Router } from "express";
import validateRequest from "../../middlewares/validationRequest";
import { FlatValidation } from "./flat.validation";
import auth from "../../middlewares/auth";
import { FlatController } from "./flat.controller";


const router = Router();

router.post(
  "/flats",
  auth(),
  validateRequest(FlatValidation.createFlatValidationSchema),
  FlatController.createFlat
);

export const FlatRoutes = router;
