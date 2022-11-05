import LoginModel from '../models/login.models';
import { ILogin } from '../interfaces/login';
import createToken from '../utils/jwt.utils';
import FieldInvalids from '../errors/Field.invalids';
import schemaLogin from '../utils/validations';

export default class ProductService {
  constructor(private loginModel = new LoginModel()) { }
  
  async insert(user: ILogin): Promise<string> {
    const { error } = schemaLogin.validate(user);

    if (error) throw new FieldInvalids(400, error.message);
    
    const result = await this.loginModel.insert(user);
    if (!result) {
      throw new FieldInvalids(401, 'Username or password invalid');
    }
    // gera o token
    const { password, ...rest } = user;
    const token = createToken(rest);
    
    return token;
  }
}