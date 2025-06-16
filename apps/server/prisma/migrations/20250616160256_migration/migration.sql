/*
  Warnings:

  - You are about to drop the column `portId` on the `Ship` table. All the data in the column will be lost.
  - Added the required column `lastVisitedShips` to the `Port` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ship" DROP CONSTRAINT "Ship_portId_fkey";

-- AlterTable
ALTER TABLE "Port" ADD COLUMN     "lastVisitedShips" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Ship" DROP COLUMN "portId";
