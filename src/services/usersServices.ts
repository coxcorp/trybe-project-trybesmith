import { IUser } from '../interfaces/usersInterfaces';
import UsersModel from '../models/usersModel';
import connection from '../models/connection';
import generateToken from '../helpers/jwtGenerator';

export default class UserService {
  private UsersModel: UsersModel;

  constructor() {
    this.UsersModel = new UsersModel(connection);
  }

  // Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
  public async create(user: IUser): Promise<string> { 
    const { id, username } = await this.UsersModel.create(user);
    if (id) {
      return generateToken({ id, username });
    }
    
    return '';
  }
}
