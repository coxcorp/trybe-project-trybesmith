import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/ordersInterfaces';

export default class OrdersModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  // Requisito 04 - Crie um endpoint para listar todos os pedidos
  // ref.: https://universodosdados.com/2018/12/03/os-super-poderes-das-de-transformacao/
  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      `SELECT  
        Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) as products
      FROM 
        Trybesmith.Orders  
      JOIN
        Trybesmith.Products 
      ON
        Orders.id = Products.orderId
      GROUP BY
        Orders.id ORDER BY Orders.userId;`,
    );
    return result as IOrder[];
  }

  // Requisito 06 - Crie um endpoint para o cadastro de um pedido
  public async create(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    return insertId;
  }
}