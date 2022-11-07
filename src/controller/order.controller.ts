import { Request, Response } from 'express';
import OrderService from '../service/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.orderService.getAll();
    res.status(200).json(result);
  }

  async insertProducts(req: Request, res: Response): Promise<void> {
    const { productsIds, user: { id } } = req.body;
    const result = await this.orderService.insertProducts(productsIds, id);
    res.status(201).json(result);
  }
}