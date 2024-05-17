"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const appError_1 = __importDefault(require("../error/appError"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = require("jsonwebtoken");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Something went wrong!';
    let errorDetails = err;
    let stack = config_1.default.env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null;
    if (err instanceof zod_1.ZodError) {
        const getZodError = (0, handleZodError_1.default)(err);
        statusCode = getZodError === null || getZodError === void 0 ? void 0 : getZodError.statusCode;
        message = getZodError === null || getZodError === void 0 ? void 0 : getZodError.message;
    }
    else if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
        statusCode = http_status_1.default.BAD_REQUEST;
        message = "Unauthorized Access";
        errorDetails = err;
        stack = null;
    }
    else if (err instanceof appError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorDetails,
        stack,
    });
};
exports.default = globalErrorHandler;
