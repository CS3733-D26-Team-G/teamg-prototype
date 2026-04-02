/*
  Warnings:

  - You are about to drop the `content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Department" AS ENUM ('OPERATION_TECHNOLOGY', 'ACCOUNTING');

-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('REFERENCE', 'WORKFLOW');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('AVAILABLE', 'IN_USE', 'UNAVAILABLE');

-- DropTable
DROP TABLE "content";

-- DropTable
DROP TABLE "employee";

-- CreateTable
CREATE TABLE "Employee" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "position" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "start_date" DATE NOT NULL,
    "supervisor" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "personal_email" TEXT NOT NULL,
    "corporate_email" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "content_owner" TEXT NOT NULL,
    "for_position" TEXT NOT NULL,
    "last_modified_time" TIMESTAMP(6) NOT NULL,
    "expiration_time" TIMESTAMP(6) NOT NULL,
    "content_type" "ContentType" NOT NULL,
    "status" "ContentStatus" NOT NULL,

    CONSTRAINT "contentlibrary_pkey" PRIMARY KEY ("id")
);
