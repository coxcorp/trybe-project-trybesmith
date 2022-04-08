import { IProduct } from '../interfaces/productsInterfaces';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';

export default class ProductService {
  private ProductsModel: ProductsModel;

  constructor() {
    this.ProductsModel = new ProductsModel(connection);
  }

  // Requisito 01 - Crie um endpoint para a listagem de produtos
  public async getAll(): Promise<IProduct[]> {
    const result = await this.ProductsModel.getAll();

    return result;
  }

  // Requisito 02 - Crie um endpoint para o cadastro de produtos
  public async create(product: IProduct): Promise<IProduct> { 
    const newProduct = await this.ProductsModel.create(product);
    
    return newProduct;
  }
}
