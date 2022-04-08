import { Request, Response } from 'express';
import ordersServices from '../services/ordersServices';

const getAll = async (req: Request, res: Response) => {
  const result = await ordersServices.getAll();
  return res.status(200).json(result);
};

export default {
  getAll,
};
