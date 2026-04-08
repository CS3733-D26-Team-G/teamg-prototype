/*
  Warnings:

  - Made the column `employeeUuid` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Position" ADD VALUE 'ADMIN';

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_accountUsername_fkey";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "employeeUuid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_employeeUuid_fkey" FOREIGN KEY ("employeeUuid") REFERENCES "Employee"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
