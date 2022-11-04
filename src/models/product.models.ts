import { RowDataPacket, ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/Product';

export default class ProductModel {
  private connection = mysql;

  async findAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Products');

    return result;
  }

  async insert(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    console.log(product);
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    console.log('result', result.insertId);
    
    // const { dataInserted } = result;
    // const { inserId } = dataInserted;
    return { id: result.insertId, ...product };
  }
}