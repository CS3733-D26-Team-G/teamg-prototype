/*
  Warnings:

  - Changed the type of `for_position` on the `Content` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `position` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('UNDERWRITER', 'BUSINESS_ANALYST');

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "for_position",
ADD COLUMN     "for_position" "Position" NOT NULL;

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "position",
ADD COLUMN     "position" "Position" NOT NULL;
