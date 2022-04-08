import { IOrder } from '../interfaces/ordersInterfaces';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return result as IOrder[];
};

export default {
  getAll,
}; 
