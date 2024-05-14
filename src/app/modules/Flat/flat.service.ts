import { Flat, Prisma } from "@prisma/client";
import { paginationHelper } from "../../../shared/paginationHelper";
import prisma from "../../../shared/prisma";
import { IFlatPayload } from "./flat.interface";
import { FlatsSearcherAbleFields } from "./flat.constant";
import { boolean } from "zod";

const createFlatIntoDB = async (payload: IFlatPayload) => {
  const result = await prisma.flat.create({
    data: payload,
  });
  return result;
};

const getAllFlatsFromDB = async (
  filters: {
    searchTerm?: string | undefined;
    availability?: string | undefined;
  },
  options: {
    page?: number;
    limit?: number;
    sortBy?: string | undefined;
    sortOrder?: string | undefined;
  }
) => {
  const { limit, page, skip } = paginationHelper.calculatePagination(options);

  const { searchTerm, availability, ...filterData } = filters;

  const andConditions: Prisma.FlatWhereInput[] = [];

  if (filters.searchTerm) {
    andConditions.push({
      OR: FlatsSearcherAbleFields.map((field) => ({
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

  const whereConditions: Prisma.FlatWhereInput = { AND: andConditions };

  const result = await prisma.flat.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });

  const meta = {
    limit,
    page,
    total: result.length,
  };
  return { result, meta };
};

const updateFlatInfoIntoDB = async (id: string, payload: Partial<Flat>) => {
  await prisma.flat.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.flat.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const FlatServices = {
  createFlatIntoDB,
  getAllFlatsFromDB,
  updateFlatInfoIntoDB
};
