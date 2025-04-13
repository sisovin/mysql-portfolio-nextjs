import { NextApiRequest, NextApiResponse } from 'next';
import { getPortfolioItems } from '@/services/portfolio.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const portfolioItems = await getPortfolioItems();
    res.status(200).json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch portfolio data' });
  }
}
