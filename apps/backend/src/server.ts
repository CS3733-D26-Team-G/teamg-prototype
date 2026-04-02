import { prisma } from "./lib/prisma";

async function main() {
  const test = await prisma.test.create(
    {
      data: {
        content: "a",
      }
    });

  console.log(test);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});