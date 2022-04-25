import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/productsInterfaces';

export default class ProductsModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  // Requisito 01 - Crie um endpoint para a listagem de produtos
  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as IProduct[];
  }

  // Requisito 02 - Crie um endpoint para o cadastro de produtos
  public async create(product: IProduct): Promise<IProduct> {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    return { id, ...product };
  }

  // Requisito 06 - Crie um endpoint para o cadastro de um pedido
  public async update(productId: number, orderId: number) {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;',
      [orderId, productId],
    );
  }
} 
