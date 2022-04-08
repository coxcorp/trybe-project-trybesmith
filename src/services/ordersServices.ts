import { IOrder } from '../interfaces/ordersInterfaces';
import ordersModel from '../models/ordersModel';

const getAll = async (): Promise<IOrder[]> => {
  const result = await ordersModel.getAll();

  return result;
};

export default {
  getAll,
};
