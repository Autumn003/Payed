/*
  Warnings:

  - You are about to drop the `merchant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "merchant";

-- CreateTable
CREATE TABLE "Merchant" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "auth_type" "AuthType" NOT NULL,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);
