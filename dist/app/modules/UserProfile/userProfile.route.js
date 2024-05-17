"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRoutes = void 0;
const express_1 = require("express");
const userProfile_controller_1 = require("./userProfile.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const userProfile_validation_1 = require("./userProfile.validation");
const router = (0, express_1.Router)();
router.get("/profile", (0, auth_1.default)(), userProfile_controller_1.UserProfileController.getUserProfile);
router.put("/profile", (0, auth_1.default)(), (0, validationRequest_1.default)(userProfile_validation_1.UserProfileValidation.updateUserProfileValidationSchema), userProfile_controller_1.UserProfileController.updateUserProfile);
exports.UserProfileRoutes = router;
