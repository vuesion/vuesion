import { PrismaClient } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';

export const hashPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        hash(password, salt, (err, encrypted) => {
          if (err) {
            reject(err);
          } else {
            resolve(encrypted);
          }
        });
      }
    });
  });
};

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  const hashedPassword = await hashPassword(body.password);

  // create account
  const newAccount = await prisma.account.create({
    data: {
      email: body.email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
    },
  });

  // TODO: implement 2FA

  return newAccount;
});
