import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/Product';

export default class ProductModel {
  private connection = mysql;

  async findAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Products');

    return result;
  }
}