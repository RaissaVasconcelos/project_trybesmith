import ProductModel from '../models/product.models';
import { IProduct } from '../interfaces/Product';

export default class ProductService {
  constructor(private productModel = new ProductModel()) { }
  
  async findAll(): Promise<IProduct[]> {
    return this.productModel.findAll();
  }

  async insert(product: IProduct): Promise<IProduct> {
    return this.productModel.insert(product);
  }
}