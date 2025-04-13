import { Prisma } from '@prisma/client';

export class BaseModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(id: number, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  static softDelete(id: number) {
    return Prisma.model.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  static restore(id: number) {
    return Prisma.model.update({
      where: { id },
      data: { deletedAt: null },
    });
  }
}
