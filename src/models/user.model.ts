import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  username: string;
  email: string;
  password: string;

  constructor(id: number, createdAt: Date, updatedAt: Date, deletedAt: Date | null, username: string, email: string, password: string) {
    super(id, createdAt, updatedAt, deletedAt);
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static createUser(username: string, email: string, password: string) {
    return Prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
  }

  static getUserById(id: number) {
    return Prisma.user.findUnique({
      where: { id },
    });
  }

  static getUserByEmail(email: string) {
    return Prisma.user.findUnique({
      where: { email },
    });
  }

  static updateUser(id: number, data: Partial<UserModel>) {
    return Prisma.user.update({
      where: { id },
      data,
    });
  }

  static deleteUser(id: number) {
    return this.softDelete(id);
  }
}
