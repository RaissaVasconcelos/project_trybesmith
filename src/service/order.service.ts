import OrderModel from '../models/ordes.models';
import { IOrder } from '../interfaces/Order';

export default class ProductService {
  constructor(private orderModel = new OrderModel()) { }
  
  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }
}