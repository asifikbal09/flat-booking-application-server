import { UserProfile } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getUserProfileFromDB = async ({ id }: { id: string }) => {
  const userInfo = await prisma.user.findUniqueOrThrow({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  const userProfile = await prisma.userProfile.findUniqueOrThrow({
    where: {
      userId: id,
    },
  });
  const result = { ...userInfo, ...userProfile };
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
