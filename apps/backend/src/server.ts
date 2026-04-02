import { prisma } from "./lib/prisma.js";

async function main() {
  const allTestData= await prisma.test.findMany();
  console.log(allTestData);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});