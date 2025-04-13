import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default_secret';

export function signToken(payload: object, options?: jwt.SignOptions): string {
  return jwt.sign(payload, secret, options);
}

export function verifyToken(token: string, options?: jwt.VerifyOptions): object | string {
  try {
    return jwt.verify(token, secret, options);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function decodeToken(token: string): null | { [key: string]: any } | string {
  return jwt.decode(token);
}
