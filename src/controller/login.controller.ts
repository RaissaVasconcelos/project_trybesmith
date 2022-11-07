import { Request, Response } from 'express';
import LoginService from '../service/login.service';

export default class LoginController {
  private loginService = new LoginService();

  async insert(req: Request, res: Response): Promise<void> {
    const result = await this.loginService.insert(req.body);
    res.status(200).json({ token: result });
  }
}