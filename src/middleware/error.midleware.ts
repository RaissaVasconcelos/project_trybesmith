import { ErrorRequestHandler } from 'express';
import FieldInvalids from '../errors/Error';

const erroMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err as FieldInvalids;

  res.status(statusCode || 500).json({ message });
};

export default erroMiddleware;