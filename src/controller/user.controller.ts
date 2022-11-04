import { Request, Response } from 'express';
import UserService from '../service/user.service';
import createToken from '../utils/jwt.utils';

export default class UserController {
  constructor(public userService = new UserService()) {}

  async insert(req: Request, res: Response): Promise<void> {
    await this.userService.insert(req.body);
    const { password, ...rest } = req.body;
    const token = await createToken(rest);
    res.status(201).json({ token });
  }
}