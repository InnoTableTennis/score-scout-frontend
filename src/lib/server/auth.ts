import jwt from 'jsonwebtoken';

export function createToken(email: string): string {
  return jwt.sign(
    {
      email: email,
    },
    'SUPERSECRET',
    {
      expiresIn: '1d',
    }
  );
}

export function verifyToken(token: string): string | null {
  try {
    const payload = jwt.verify(token, 'SUPERSECRET') as { email: string };
    return payload.email;
  } catch {
    return null;
  }
}
