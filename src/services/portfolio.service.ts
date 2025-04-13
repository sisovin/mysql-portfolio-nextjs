import prisma from '@/lib/db/prisma';
import { PortfolioModel } from '@/models/portfolio.model';

export async function getPortfolioItems() {
  return await prisma.portfolio.findMany();
}

export async function getPortfolioItemById(id: number) {
  return await prisma.portfolio.findUnique({
    where: { id },
  });
}

export async function createPortfolioItem(data: PortfolioModel) {
  return await prisma.portfolio.create({
    data,
  });
}

export async function updatePortfolioItem(id: number, data: Partial<PortfolioModel>) {
  return await prisma.portfolio.update({
    where: { id },
    data,
  });
}

export async function deletePortfolioItem(id: number) {
  return await prisma.portfolio.delete({
    where: { id },
  });
}
