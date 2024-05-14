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

router.get(
  "/flats",
  FlatController.getAllFlat
);

router.put(
  "/flats/:flatId",
  auth(),
  validateRequest(FlatValidation.updateFlatValidationSchema),
  FlatController.updateFlat
);

export const FlatRoutes = router;
