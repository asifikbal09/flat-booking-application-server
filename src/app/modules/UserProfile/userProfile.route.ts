import { Router } from "express";
import { UserProfileController } from "./userProfile.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validationRequest";
import { UserProfileValidation } from "./userProfile.validation";


const router = Router();

router.get(
  "/profile",
  auth(),
  UserProfileController.getUserProfile
);

router.put(
  "/profile",
  auth(),
  validateRequest(UserProfileValidation.updateUserProfileValidationSchema),
  UserProfileController.updateUserProfile
);

export const UserProfileRoutes = router;
