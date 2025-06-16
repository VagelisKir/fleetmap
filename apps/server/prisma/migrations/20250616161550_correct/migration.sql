/*
  Warnings:

  - You are about to drop the column `teu` on the `Ship` table. All the data in the column will be lost.
  - Made the column `imo` on table `Ship` required. This step will fail if there are existing NULL values in that column.
  - Made the column `visitedAt` on table `Ship` required. This step will fail if there are existing NULL values in that column.
  - Made the column `min_teu` on table `Ship` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ship" DROP COLUMN "teu",
ALTER COLUMN "imo" SET NOT NULL,
ALTER COLUMN "visitedAt" SET NOT NULL,
ALTER COLUMN "min_teu" SET NOT NULL;
