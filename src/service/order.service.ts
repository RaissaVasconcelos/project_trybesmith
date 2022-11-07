import OrderModel from '../models/ordes.models';
import { IOrder } from '../interfaces/Order';
import ProductModel from '../models/product.models';
import schemaproductsIds from '../utils/validationOrders';
import ErrotHttp from '../errors/Error';
import mapError from '../errors/statusCode';

export default class ProductService {
  private orderModel = new OrderModel();

  private productModel = new ProductModel();
  
  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }

  async insertProducts(product: Array<number>, id: number): Promise<IOrder> {
    const { error } = schemaproductsIds.validate(product);
    
    if (error) throw new ErrotHttp(mapError(error.message), error.message);

    const idPedido = await this.orderModel.insert(id);
    
    await Promise.all(product.map((item) =>
      this.productModel.insertOrderId(idPedido, item)));

    return { userId: id, productsIds: product };
  }
}