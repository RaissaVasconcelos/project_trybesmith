import { Request, Response } from 'express';
import OrderService from '../service/order.service';

export default class ProductController {
  constructor(private orderService = new OrderService()) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.orderService.getAll();
    res.status(200).json(result);
  }
}