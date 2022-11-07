import { Request, Response, NextFunction } from 'express';
import validatedToken from '../utils/jwt.validations';

const authMidleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const { type, message } = validatedToken(authorization as string);

  if (type) return res.status(401).json({ message: 'Invalid token' });
  
  req.body.user = message;
  
  next();
};

export default authMidleware;