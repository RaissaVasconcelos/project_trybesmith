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

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    
    return { id: result.insertId, ...product };
  }

  async insertOrderId(orderId: number, id: number) {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
  }
}