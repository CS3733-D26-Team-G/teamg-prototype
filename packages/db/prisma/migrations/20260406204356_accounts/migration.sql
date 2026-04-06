/*
  Warnings:

  - A unique constraint covering the columns `[accountUsername]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountUsername` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('ADMIN', 'EMPLOYEE');

-- AlterTable
ALTER TABLE "Content" ALTER COLUMN "uuid" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "accountUsername" TEXT NOT NULL,
ALTER COLUMN "uuid" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Account" (
    "employeeUuid" UUID,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "AccountType" NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("username")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_employeeUuid_key" ON "Account"("employeeUuid");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_accountUsername_key" ON "Employee"("accountUsername");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_accountUsername_fkey" FOREIGN KEY ("accountUsername") REFERENCES "Account"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
