/*
  Warnings:

  - You are about to drop the column `userProfileId` on the `flats` table. All the data in the column will be lost.
  - Added the required column `userId` to the `flats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "flats" DROP CONSTRAINT "flats_userProfileId_fkey";

-- AlterTable
ALTER TABLE "flats" DROP COLUMN "userProfileId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "flats" ADD CONSTRAINT "flats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
