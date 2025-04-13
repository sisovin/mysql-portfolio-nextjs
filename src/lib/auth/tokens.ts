import { signToken, verifyToken, decodeToken } from './jwt';

const tokenExpiry = '1h';

export function createAuthToken(payload: object): string {
  return signToken(payload, { expiresIn: tokenExpiry });
}

export function validateAuthToken(token: string): object | string {
  return verifyToken(token);
}

export function parseAuthToken(token: string): null | { [key: string]: any } | string {
  return decodeToken(token);
}
