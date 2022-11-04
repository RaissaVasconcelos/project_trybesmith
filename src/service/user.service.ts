import UserModel from '../models/user.models';
import { IUser } from '../interfaces/User';

export default class UserService {
  constructor(public userModel = new UserModel()) {}

  async insert(user: IUser): Promise<IUser> {
    return this.userModel.insert(user);
  }
}