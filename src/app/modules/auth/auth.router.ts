import { Router } from "express";
import { AuthValidations } from "./auth.validation";
import validateRequest from "../../middlewares/validationRequest";
import { AuthController } from "./auth.controller";


const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
