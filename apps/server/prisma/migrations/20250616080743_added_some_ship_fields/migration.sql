/*
  Warnings:

  - Added the required column `draft_m` to the `Ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `geared` to the `Ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `Ship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ship" ADD COLUMN     "draft_m" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gear_info" TEXT,
ADD COLUMN     "geared" BOOLEAN NOT NULL,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "photo_url" TEXT NOT NULL;
