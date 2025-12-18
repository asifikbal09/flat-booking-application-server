/*
  Warnings:

  - You are about to drop the column `userId` on the `flats` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "flats" DROP CONSTRAINT "flats_userId_fkey";

-- AlterTable
ALTER TABLE "flats" DROP COLUMN "userId",
ADD COLUMN     "userProfileId" TEXT NOT NULL DEFAULT 'ba0265ed-af34-4788-b83c-727c0457f9e0';

-- AddForeignKey
ALTER TABLE "flats" ADD CONSTRAINT "flats_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
