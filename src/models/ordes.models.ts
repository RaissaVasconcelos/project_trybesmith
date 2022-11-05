import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/Order';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id;`);

    console.log(result);
    
    return result;
  } 
}