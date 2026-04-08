/*
  Warnings:

  - You are about to drop the column `accountUsername` on the `Employee` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Employee_accountUsername_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "accountUsername";
