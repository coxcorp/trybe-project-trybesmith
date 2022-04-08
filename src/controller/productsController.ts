import { Request, Response } from 'express';
import ProductsServices from '../services/productsServices';

const getAll = async (req: Request, res: Response) => {
  const result = await ProductsServices.getAll();
  res.status(200).json(result);
};

export default {
  getAll,
};
