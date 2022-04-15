import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/loginInterface';
import { IUser } from '../interfaces/usersInterfaces';

export default class LoginModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  // Requisito 05 - Crie um endpoint para o login de pessoas usuárias
  public async login({ username, password }: ILogin): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return result as IUser[];
  }
} 
