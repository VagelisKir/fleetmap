-- CreateTable
CREATE TABLE "Port" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imo" INTEGER NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL,
    "teu" INTEGER NOT NULL,
    "loa_m" DOUBLE PRECISION NOT NULL,
    "portId" INTEGER NOT NULL,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
