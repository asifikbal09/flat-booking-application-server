import { Router } from "express";
import { UserProfileController } from "./userProfile.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validationRequest";
import { UserProfileValidation } from "./userProfile.validation";
import { UserRoles } from "../User/user.constant";


const router = Router();

router.get(
  "/profile",
  auth([UserRoles.ADMIN, UserRoles.USER]),
  UserProfileController.getUserProfile
);

router.put(
  "/profile",
  auth([UserRoles.ADMIN, UserRoles.USER]),
  validateRequest(UserProfileValidation.updateUserProfileValidationSchema),
  UserProfileController.updateUserProfile
);

export const UserProfileRoutes = router;
