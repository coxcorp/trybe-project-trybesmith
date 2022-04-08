import { IProduct } from '../interfaces/productsInterfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  // console.log(result);
  return result as IProduct[];
};

export default {
  getAll,
}; 
