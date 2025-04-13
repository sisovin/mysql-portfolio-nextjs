import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { hashPassword, verifyPassword } from '@/lib/auth/argon2';
import { prisma } from '@/lib/db/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Missing email or password' });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User created', user: newUser });
  } else if (req.method === 'GET') {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ user });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
