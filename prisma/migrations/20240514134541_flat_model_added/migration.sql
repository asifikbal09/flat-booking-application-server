/*
  Warnings:

  - Made the column `bio` on table `user-profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user-profile" ALTER COLUMN "bio" SET NOT NULL;

-- CreateTable
CREATE TABLE "flats" (
    "id" TEXT NOT NULL,
    "squareFeet" INTEGER NOT NULL,
    "totalBedrooms" INTEGER NOT NULL,
    "totalRooms" INTEGER NOT NULL,
    "utilitiesDescription" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rent" INTEGER NOT NULL,
    "availability" BOOLEAN NOT NULL DEFAULT true,
    "advanceAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flats_pkey" PRIMARY KEY ("id")
);
