import { IProduct } from '../interfaces/productsInterfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as IProduct[];
};

export default {
  getAll,
}; 
