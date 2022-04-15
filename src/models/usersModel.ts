import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/usersInterfaces';

export default class UsersModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  // Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
  public async create(user: IUser): Promise<IUser> {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.classe, user.level, user.password],
    );
    return { id, ...user };
  }
} 
