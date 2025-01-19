import { Router } from "express";
import { AuthValidations } from "./auth.validation";
import validateRequest from "../../middlewares/validationRequest";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";


const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);

router.post(
  "/change-password",
  auth(),
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthController.changeUserPassword
)

export const AuthRoutes = router;
