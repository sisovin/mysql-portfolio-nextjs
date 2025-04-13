import { PrismaClient } from '@prisma/client';
import { hashPassword, verifyPassword } from '@/lib/auth/argon2';
import { createAuthToken, validateAuthToken } from '@/lib/auth/tokens';
import { UserModel } from '@/models/user.model';

const prisma = new PrismaClient();

export class AuthService {
  static async register(username: string, email: string, password: string) {
    const hashedPassword = await hashPassword(password);
    const user = await UserModel.createUser(username, email, hashedPassword);
    return user;
  }

  static async login(email: string, password: string) {
    const user = await UserModel.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await verifyPassword(user.password, password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = createAuthToken({ id: user.id, email: user.email });
    return { user, token };
  }

  static async authenticate(token: string) {
    const payload = validateAuthToken(token);
    const user = await UserModel.getUserById(payload.id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
