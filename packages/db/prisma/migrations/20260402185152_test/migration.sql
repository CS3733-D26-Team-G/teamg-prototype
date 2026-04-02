-- CreateTable
CREATE TABLE "employee" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "position" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "supervisor" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "personal_email" TEXT NOT NULL,
    "corporate_email" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "content" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "content_owner" TEXT NOT NULL,
    "for_position" TEXT NOT NULL,
    "last_modified_time" TIMESTAMP(6) NOT NULL,
    "expiration_time" TIMESTAMP(6) NOT NULL,
    "content_type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "contentlibrary_pkey" PRIMARY KEY ("id")
);
