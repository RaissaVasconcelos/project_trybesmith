import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  private productService = new ProductService();

  async findAll(req: Request, res: Response): Promise<void> {
    const result = await this.productService.findAll();
    res.status(200).json(result);
  }

  async insert(req: Request, res: Response): Promise<void> {
    const result = await this.productService.insert(req.body);
    res.status(201).json(result);
  }
}