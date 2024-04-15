import {NuxtAuthHandler} from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NuxtAuthHandler({
    providers: [
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'email' },
                password: {  label: 'Password', type: 'password' }
            },
            async authorize(credentials : any) {
                const user = await prisma.user.findUnique(
                    { 
                        where: 
                        { 
                            email: credentials?.email
                        },
                        select: {
                            id: true,
                            email: true,
                            password: true
                        } 
                    });
                    if(!user) {
                    return null;
                }

                if(user.password !== credentials?.password) {
                    return null;
                }else {
                    return user;
                }
            }
        })
    ]
});