import { ILogin } from '../interfaces/loginInterface';
import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import generateToken from '../helpers/jwtGenerator';

export default class UserService {
  private LoginModel: LoginModel;

  constructor() {
    this.LoginModel = new LoginModel(connection);
  }

  // Requisito 05 - Crie um endpoint para o login de pessoas usuárias
  public async login(login: ILogin) { 
    const result = await this.LoginModel.login(login);
    if (!result.length) return '';
    const [{ id, username }] = result;
    if (id) {
      const token = generateToken({ id, username });
      return { token };
    }
  }
}