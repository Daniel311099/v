import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

async function main() {

    const records = await prisma.fAQ.findMany()

    console.log({records})
}

main()
