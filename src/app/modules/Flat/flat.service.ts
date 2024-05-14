import prisma from "../../../shared/prisma";
import { IFlatPayload } from "./flat.interface";

const createFlatIntoDB = async (payload: IFlatPayload) => {
  const result = await prisma.flat.create({
    data: payload,
  });
  return result;
};


export const FlatServices={
    createFlatIntoDB
}