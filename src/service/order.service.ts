import OrderModel from '../models/ordes.models';
import { IOrder } from '../interfaces/Order';
import ProductModel from '../models/product.models';
import schemaproductsIds from '../utils/validationOrders';
import ErrotHttp from '../errors/Error';
// import mapError from '../errors/statusCode';

export default class ProductService {
  private orderModel = new OrderModel();

  private productModel = new ProductModel();
  
  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }

  async insertProducts(product: Array<number>, id: number): Promise<IOrder> {
    if (!product) throw new ErrotHttp(400, '"productsIds" is required');
    const { error } = schemaproductsIds.validate(product);
    if (error) throw new ErrotHttp(422, '"productsIds" must be an array');
    
    if (product.length < 1) throw new ErrotHttp(422, '"productsIds" must include only numbers');

    const idPedido = await this.orderModel.insert(id);
    
    await Promise.all(product.map((item) =>
      this.productModel.insertOrderId(idPedido, item)));

    return { userId: id, productsIds: product };
  }
}