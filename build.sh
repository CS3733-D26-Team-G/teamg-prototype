pnpm install
pnpm --filter db run db:generate
echo "=== DB GENERATED FILES ==="
find packages/db/generated/prisma -maxdepth 3 -type f | sort
echo "=== DB INDEX ==="
cat packages/db/index.ts
echo "=== ZOD STUFF ==="
find packages/zod/generated/schemas -maxdepth 3 -type f | sort
turbo run build