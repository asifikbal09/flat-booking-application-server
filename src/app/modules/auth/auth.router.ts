import { Router } from "express";
import { AuthValidations } from "./auth.validation";
import validateRequest from "../../middlewares/validationRequest";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { UserRoles } from "../User/user.constant";


const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);

router.post(
  "/change-password",
  auth([UserRoles.ADMIN,UserRoles.USER]),
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthController.changeUserPassword
)

export const AuthRoutes = router;
