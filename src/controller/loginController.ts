import { Request, Response, NextFunction } from 'express';
import LoginServices from '../services/loginServices';

export default class LoginController {
  private loginServices: LoginServices = new LoginServices();

  // Requisito 05 - Crie um endpoint para o login de pessoas usuárias
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.loginServices.login(req.body);
      if (!result) return res.status(401).json({ error: 'Username or password invalid' });

      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }
}