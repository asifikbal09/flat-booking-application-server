"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_validation_1 = require("./auth.validation");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.post("/login", (0, validationRequest_1.default)(auth_validation_1.AuthValidations.loginValidationSchema), auth_controller_1.AuthController.loginUser);
router.post("/change-password", (0, auth_1.default)(), (0, validationRequest_1.default)(auth_validation_1.AuthValidations.changePasswordValidationSchema), auth_controller_1.AuthController.changeUserPassword);
exports.AuthRoutes = router;
