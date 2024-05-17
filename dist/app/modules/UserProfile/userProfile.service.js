"use strict";
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
exports.UserProFileServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getUserProfileFromDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    const result = yield prisma_1.default.userProfile.findUniqueOrThrow({
        where: {
            userId: id,
        },
    });
    return result;
});
const updateUserProfileFromDB = (_b, payload_1) => __awaiter(void 0, [_b, payload_1], void 0, function* ({ id }, payload) {
    const result = yield prisma_1.default.userProfile.update({
        where: {
            userId: id,
        },
        data: payload,
    });
    return result;
});
exports.UserProFileServices = {
    getUserProfileFromDB,
    updateUserProfileFromDB,
};
