-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('LOG_IN', 'CREATE_CONTENT', 'EDIT_CONTENT', 'DELETE_CONTENT', 'CREATE_EMPLOYEE', 'EDIT_EMPLOYEE', 'DELETE_EMPLOYEE');

-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('EMPLOYEE', 'CONTENT');

-- CreateTable
CREATE TABLE "Activity" (
    "uuid" UUID NOT NULL,
    "employeeUuid" UUID NOT NULL,
    "action" "ActionType" NOT NULL,
    "resource" "ResourceType",
    "resourceUuid" UUID,
    "timestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_employeeUuid_key" ON "Activity"("employeeUuid");
