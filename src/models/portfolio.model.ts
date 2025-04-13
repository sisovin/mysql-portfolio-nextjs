import { BaseModel } from './base.model';

export class PortfolioModel extends BaseModel {
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
  ) {
    super(id, createdAt, updatedAt, deletedAt);
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static createPortfolioItem(
    title: string,
    description: string,
    imageUrl: string
  ) {
    return Prisma.portfolio.create({
      data: {
        title,
        description,
        imageUrl,
      },
    });
  }

  static getPortfolioItemById(id: number) {
    return Prisma.portfolio.findUnique({
      where: { id },
    });
  }

  static updatePortfolioItem(id: number, data: Partial<PortfolioModel>) {
    return Prisma.portfolio.update({
      where: { id },
      data,
    });
  }

  static deletePortfolioItem(id: number) {
    return this.softDelete(id);
  }
}
