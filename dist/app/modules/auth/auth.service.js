"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const brcypt = __importStar(require("bcrypt"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const appError_1 = __importDefault(require("../../error/appError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelper_1 = require("../../../shared/jwtHelper");
const config_1 = __importDefault(require("../../../config"));
const loginAndGetToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
    });
    const isPasswordCorrect = yield brcypt.compare(payload.password, user.password);
    if (!isPasswordCorrect) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Incorrect Password.");
    }
    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    const token = jwtHelper_1.jwtHelpers.generateToken(jwtPayload, config_1.default.tokenSecret, config_1.default.expire_in);
    const result = {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
    };
    return result;
});
const changeUserPasswordIntoDB = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            id: userId
        }
    });
    const isPasswordCorrect = yield brcypt.compare(payload.currentPassword, user.password);
    if (!isPasswordCorrect) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Incorrect Password.");
    }
    const hashedPassword = yield brcypt.hash(payload.newPassword, config_1.default.saltRound);
    yield prisma_1.default.user.update({
        where: {
            id: userId
        },
        data: {
            password: hashedPassword
        }
    });
});
exports.AuthServices = {
    loginAndGetToken,
    changeUserPasswordIntoDB
};
