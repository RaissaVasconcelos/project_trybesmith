import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  constructor(public userService = new UserService()) {}

  async insert(req: Request, res: Response): Promise<void> {
    const result = await this.userService.insert(req.body);
    res.status(201).json({ token: result });
  }
}