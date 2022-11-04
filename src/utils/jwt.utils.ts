import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

dotenv.config();

const createToken = (data: IUser) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;