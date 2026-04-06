import { prisma } from "./lib/prisma.js";

async function main() {
  // Content sample data
  await prisma.content.createMany({
    data: [
      {
        title: "Policy Guide",
        url: "https://example.com/policy",
        content_owner: "Alice Johnson",
        for_position: "BUSINESS_ANALYST",
        last_modified_time: new Date("2020-06-07"),
        expiration_time: new Date("2021-06-07"),
        content_type: "REFERENCE",
        status: "AVAILABLE",
      },
      {
        title: "Claims Workflow",
        url: "https://example.com/workflow",
        content_owner: "Bob Smith",
        for_position: "UNDERWRITER",
        last_modified_time: new Date("2021-06-07"),
        expiration_time: new Date("2022-06-07"),
        content_type: "WORKFLOW",
        status: "IN_USE",
      },
      {
        title: "Risk Template",
        url: "https://example.com/risk",
        content_owner: "Carol Lee",
        for_position: "UNDERWRITER",
        last_modified_time: new Date("2022-06-07"),
        expiration_time: new Date("2023-06-07"),
        content_type: "WORKFLOW",
        status: "UNAVAILABLE",
      },
      {
        title: "Checklist",
        url: "https://example.com/checklist",
        content_owner: "David Kim",
        for_position: "UNDERWRITER",
        last_modified_time: new Date("2023-06-07"),
        expiration_time: new Date("2024-06-07"),
        content_type: "WORKFLOW",
        status: "AVAILABLE",
      },
      {
        title: "Compliance Update",
        url: "https://example.com/compliance",
        content_owner: "Emily Brown",
        for_position: "BUSINESS_ANALYST",
        last_modified_time: new Date("2025-06-07"),
        expiration_time: new Date("2026-06-07"),
        content_type: "REFERENCE",
        status: "IN_USE",
      },
    ],
  });

  // Employee sample data
  await prisma.employee.createMany({
    data: [
      {
        first_name: "Alice",
        last_name: "Johnson",
        date_of_birth: new Date("1995-03-12"),
        position: "BUSINESS_ANALYST",
        department: "ACCOUNTING",
        start_date: new Date("2022-06-01"),
        supervisor: "Michael Smith",
        phone_number: "401-555-1234",
        personal_email: "alice.johnson@gmail.com",
        corporate_email: "alice.johnson@company.com",
      },
      {
        first_name: "Brian",
        last_name: "Lee",
        date_of_birth: new Date("1990-07-25"),
        position: "UNDERWRITER",
        department: "OPERATION_TECHNOLOGY",
        start_date: new Date("2021-09-15"),
        supervisor: "Sarah Davis",
        phone_number: "401-555-2345",
        personal_email: "brian.lee@yahoo.com",
        corporate_email: "brian.lee@company.com",
      },
      {
        first_name: "Carla",
        last_name: "Martinez",
        date_of_birth: new Date("1988-11-03"),
        position: "BUSINESS_ANALYST",
        department: "ACCOUNTING",
        start_date: new Date("2020-01-20"),
        supervisor: "Michael Smith",
        phone_number: "401-555-3456",
        personal_email: "carla.martinez@gmail.com",
        corporate_email: "carla.martinez@company.com",
      },
      {
        first_name: "David",
        last_name: "Nguyen",
        date_of_birth: new Date("1993-05-18"),
        position: "BUSINESS_ANALYST",
        department: "OPERATION_TECHNOLOGY",
        start_date: new Date("2023-02-10"),
        supervisor: "Sarah Davis",
        phone_number: "401-555-4567",
        personal_email: "david.nguyen@gmail.com",
        corporate_email: "david.nguyen@company.com",
      },
      {
        first_name: "Emily",
        last_name: "Brown",
        date_of_birth: new Date("1997-09-30"),
        position: "BUSINESS_ANALYST",
        department: "ACCOUNTING",
        start_date: new Date("2024-07-01"),
        supervisor: "Michael Smith",
        phone_number: "401-555-5678",
        personal_email: "emily.brown@gmail.com",
        corporate_email: "emily.brown@company.com",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
