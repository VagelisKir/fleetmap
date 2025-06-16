/*
  Warnings:

  - Added the required column `berths` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_draught_m` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_length_m` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_lat` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_lon` to the `Port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `Ship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ship" DROP CONSTRAINT "Ship_portId_fkey";

-- AlterTable
ALTER TABLE "Port" ADD COLUMN     "berths" INTEGER NOT NULL,
ADD COLUMN     "max_draught_m" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "max_length_m" INTEGER NOT NULL,
ADD COLUMN     "photo_url" TEXT NOT NULL,
ADD COLUMN     "position_lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "position_lon" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Ship" ADD COLUMN     "last_ports" TEXT[],
ADD COLUMN     "min_teu" INTEGER,
ADD COLUMN     "shipyard" TEXT,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "year_built" INTEGER,
ALTER COLUMN "imo" DROP NOT NULL,
ALTER COLUMN "visitedAt" DROP NOT NULL,
ALTER COLUMN "teu" DROP NOT NULL,
ALTER COLUMN "portId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port"("id") ON DELETE SET NULL ON UPDATE CASCADE;
