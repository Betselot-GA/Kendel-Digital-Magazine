// @ts-ignore
import { User } from '.prisma/client';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
// @ts-ignore
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../lib/prisma';
import * as bcrypt from 'bcrypt';

// @ts-ignore
let userAccount = null;

const configuration = {
    session: {
        jwt: true,
    },
    // adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            // @ts-ignore
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email,
                    }
                });

                if (user !== null) {
                    const isMatch = await bcrypt.compare(
                        // @ts-ignore
                        credentials.password,
                        user.password
                    );
                    if (isMatch) {
                        userAccount = {
                            name: user.name,
                            email: user.email,
                            image: user.role
                        };
                        return userAccount
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        // @ts-ignore
        // @ts-ignore
        async session(session, token) {
            // @ts-ignore
            if (userAccount !== null) {
                // @ts-ignore
                session.user = userAccount;
            }
            else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined))) {
                session.user = token.user;
            }
            else if (typeof token !== typeof undefined) {
                session.token = token;
            }
            return session;
        },
    }
}
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default (req, res) => NextAuth(req, res, configuration);