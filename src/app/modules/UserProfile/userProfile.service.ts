import { UserProfile } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getUserProfileFromDB = async ({ id }: { id: string }) => {
  const result = await prisma.userProfile.findUniqueOrThrow({
    where: {
      userId: id,
    },
  });
  return result;
};

const updateUserProfileFromDB = async (
  { id }: { id: string },
  payload: Partial<UserProfile>
) => {
  const result = await prisma.userProfile.update({
    where: {
      userId: id,
    },
    data: payload,
  });
  return result;
};

export const UserProFileServices = {
  getUserProfileFromDB,
  updateUserProfileFromDB,
};
