import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ILogin } from '../interfaces/login';

export default class LoginModel {
  private connection = mysql;
  
  async insert(user: ILogin): Promise<ILogin> {
    const { username, password } = user;
    const [[result]] = await this.connection.execute<(
    ILogin & RowDataPacket)[]>(
      `SELECT * FROM Trybesmith.Users
      WHERE username = ? AND password = ?`,
      [username, password],
      );
      
    console.log('result', result);
    return result;
  }
}