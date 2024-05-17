"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const flat_validation_1 = require("./flat.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const flat_controller_1 = require("./flat.controller");
const router = (0, express_1.Router)();
router.post("/flats", (0, auth_1.default)(), (0, validationRequest_1.default)(flat_validation_1.FlatValidation.createFlatValidationSchema), flat_controller_1.FlatController.createFlat);
router.get("/flats", flat_controller_1.FlatController.getAllFlat);
router.put("/flats/:flatId", (0, auth_1.default)(), (0, validationRequest_1.default)(flat_validation_1.FlatValidation.updateFlatValidationSchema), flat_controller_1.FlatController.updateFlat);
exports.FlatRoutes = router;
