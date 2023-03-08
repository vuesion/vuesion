import { compare } from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as Prisma from '@prisma/client';
import { NuxtAuthHandler } from '#auth';

const prisma = new Prisma.PrismaClient();

export const comparePasswords = (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    compare(plainPassword, hashedPassword, function (err, isPasswordMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isPasswordMatch);
      }
    });
  });
};

export default NuxtAuthHandler({
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  secret: process.env.NUXT_AUTH_SECRET,
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      async authorize(credentials: any) {
        const email = credentials.email;
        const password = credentials.password;
        const accountRecord = await prisma.account.findUnique({ where: { email } });

        if (accountRecord === null) {
          return null;
        }

        const isMatchingPassword = await comparePasswords(password, accountRecord?.password);

        accountRecord.password = '';

        if (isMatchingPassword) {
          return accountRecord;
        } else {
          return null;
        }
      },
    }),
  ],
});
