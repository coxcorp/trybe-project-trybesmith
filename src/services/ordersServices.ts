import { IOrder } from '../interfaces/ordersInterfaces';
import OrdersModel from '../models/ordersModel';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';
import IJwt from '../interfaces/jwtInterface';
import { verifyToken } from '../helpers/jwtVerify';

export default class OrdersServices {
  private OrdersModel: OrdersModel;

  private ProductsModel: ProductsModel;

  constructor() {
    this.OrdersModel = new OrdersModel(connection);
    this.ProductsModel = new ProductsModel(connection);
  }

  // Requisito 04 - Crie um endpoint para listar todos os pedidos
  public async getAll(): Promise<IOrder[]> {
    const result = await this.OrdersModel.getAll();

    return result;
  }

  // Requisito 06 - Crie um endpoint para o cadastro de um pedido
  public async create({ products }: IOrder, token: string) {
    const { id }: IJwt = verifyToken(token);
    const insertId: number = await this.OrdersModel.create(id);
    const promiseList = products
      .map(async (product: number) => this.ProductsModel.update(product, insertId));
    await Promise.all(promiseList);
    return { order: { userId: id, products } };
  }
}
