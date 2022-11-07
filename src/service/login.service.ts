import LoginModel from '../models/login.models';
import { ILogin } from '../interfaces/login';
import createToken from '../utils/jwt.utils';
import schemaLogin from '../utils/validationLogin';
import ErrotHttp from '../errors/Error';
import mapError from '../errors/statusCode';

export default class ProductService {
  constructor(private loginModel = new LoginModel()) { }
  
  async insert(user: ILogin): Promise<string> {
    const { error } = schemaLogin.validate(user);

    if (error) throw new ErrotHttp(mapError(error.message), error.message);
    
    const result = await this.loginModel.insert(user);
    
    if (!result) {
      throw new ErrotHttp(401, 'Username or password invalid');
    }
    // gera o token
    const { password, ...rest } = result;
    const token = createToken(rest);
    
    return token;
  }
}