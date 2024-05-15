import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.createUser
);

export const UserRoutes = router;
