/*
  Warnings:

  - Added the required column `duration` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moveInDate` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfPeople` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "moveInDate" TEXT NOT NULL,
ADD COLUMN     "numberOfPeople" INTEGER NOT NULL;
