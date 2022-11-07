import UserModel from '../models/user.models';
import { IUser } from '../interfaces/User';
import createToken from '../utils/jwt.utils';
import schemaUsers from '../utils/validationUser';
import ErrotHttp from '../errors/Error';
import mapError from '../errors/statusCode';

export default class UserService {
  public userModel = new UserModel();

  async insert(user: IUser): Promise<string> {
    const { error } = schemaUsers.validate(user);

    if (error) throw new ErrotHttp(mapError(error.message), error.message);

    const result = await this.userModel.insert(user);
    
    // gera o token
    const { password, ...rest } = result;
    const token = createToken(rest);
    
    return token;
  }
}