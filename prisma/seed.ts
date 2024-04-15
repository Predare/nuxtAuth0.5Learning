import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            email: '123@123.com',
            password: '123',
        }
    });
}

main();