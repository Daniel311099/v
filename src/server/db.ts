import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

import { env } from "~/env";

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const createPrismaClient = () => {
    const data = {
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    // engine: "library" as string
    // adapter
  } as any
 return new PrismaClient(data)
//  .$extends(withAccelerate());
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

