import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces/Order';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  // retorna todos os pedidos com informações da tabela Products
  async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id;`);
    
    return result;
  } 

  // usuário logado vai fazer o novo pedido
  async insert(id: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );
    // id do novo pedido
    return insertId;
  }
}