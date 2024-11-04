import prisma from "../config/db";
import { hashPassword } from "../utils/hash.util";

export const register = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  return user;
};

export default register;
