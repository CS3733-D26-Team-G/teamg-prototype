// scripts/fix-zod-prisma-imports.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve("../zod/generated");

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walk(full);
        } else if (entry.isFile() && full.endsWith(".ts")) {
            let content = await fs.readFile(full, "utf8");
            content = content.replaceAll(
                /from\s+["'](\.\.\/)+db\/generated\/prisma\/client(?:\.ts)?["']/g,
                'from "@repo/db/client"'
            );
            await fs.writeFile(full, content);
        }
    }
}

await walk(root);
console.log("Rewrote generated Prisma imports in Zod files.");