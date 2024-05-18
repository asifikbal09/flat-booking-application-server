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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const flat_constant_1 = require("./flat.constant");
const paginationHelper_1 = require("../../../shared/paginationHelper");
const createFlatIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.flat.create({
        data: payload,
    });
    return result;
});
const getAllFlatsFromDB = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm, availability } = filters, filterData = __rest(filters, ["searchTerm", "availability"]);
    const andConditions = [];
    if (filters.searchTerm) {
        andConditions.push({
            OR: flat_constant_1.FlatsSearcherAbleFields.map((field) => ({
                [field]: {
                    contains: filters.searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (filters.availability) {
        andConditions.push({
            availability: filters.availability == "false" ? false : true,
        });
    }
    const whereConditions = { AND: andConditions };
    const result = yield prisma_1.default.flat.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : {
                createdAt: "desc",
            },
    });
    const total = yield prisma_1.default.flat.count();
    const meta = {
        limit,
        page,
        total,
    };
    return { result, meta };
});
const updateFlatInfoIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.flat.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma_1.default.flat.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.FlatServices = {
    createFlatIntoDB,
    getAllFlatsFromDB,
    updateFlatInfoIntoDB
};
