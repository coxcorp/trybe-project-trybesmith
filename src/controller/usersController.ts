import { Request, Response, NextFunction } from 'express';
import UsersServices from '../services/usersServices';

export default class UsersController {
  private usersServices: UsersServices = new UsersServices();

  // Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.usersServices.create(req.body);
      return res.status(201).json({ token });
    } catch (e) {
      next(e);
    }
  }
}