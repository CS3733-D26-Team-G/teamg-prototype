import { prisma } from "./lib/prisma.js";

async function main() {
  const allEmployee= await prisma.employee.findMany();
  console.log(allEmployee);

  const allContent = await prisma.content.findMany();
  console.log(allContent);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});