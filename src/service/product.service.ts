import ProductModel from '../models/product.models';
import { IProduct } from '../interfaces/Product';
import schemaProducts from '../utils/validationProducts';
import ErrotHttp from '../errors/Error';
import mapError from '../errors/statusCode';

export default class ProductService {
  constructor(private productModel = new ProductModel()) { }
  
  async findAll(): Promise<IProduct[]> {
    return this.productModel.findAll();
  }

  async insert(product: IProduct): Promise<IProduct> {
    const { error } = schemaProducts.validate(product);
    
    if (error) throw new ErrotHttp(mapError(error.message), error.message);

    const result = this.productModel.insert(product);

    return result;
  }
}