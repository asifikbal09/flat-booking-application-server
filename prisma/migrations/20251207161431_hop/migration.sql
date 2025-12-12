/*
  Warnings:

  - Added the required column `imageUrl` to the `user-profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flats" ADD COLUMN     "imageUrls" TEXT[];

-- AlterTable
ALTER TABLE "user-profile" ADD COLUMN     "imageUrl" TEXT NOT NULL;
