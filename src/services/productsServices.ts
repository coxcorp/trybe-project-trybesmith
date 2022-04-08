import { IProduct } from '../interfaces/productsInterfaces';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IProduct[]> => {
  const result = await productsModel.getAll();

  return result;
};

export default {
  getAll,
};
