import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    if (typeof decoded === 'object' && decoded !== null) {
      req.userId = (decoded as JwtPayload).userId || (decoded as JwtPayload).id;
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalid' });
  }
};
