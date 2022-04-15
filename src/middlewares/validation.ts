import { Request, Response, NextFunction } from 'express';

export default class Validation {
  public nameValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ error: 'Name is required' });
    }
    if (typeof (name) !== 'string') {
      return res.status(422).send({ error: 'Name must be a string' });
    }
    if (name.length <= 2) {
      return res.status(422).send({ error: 'Name must be longer than 2 characters' });
    }
    next();
  };

  public amountValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).send({ error: 'Amount is required' });
    }
    if (typeof (amount) !== 'string') {
      return res.status(422).send({ error: 'Amount must be a string' });
    }
    if (amount.length <= 2) {
      return res.status(422).send({ error: 'Amount must be longer than 2 characters' });
    }
    next();
  };

  public usernameValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { username } = req.body;
    if (!username) {
      return res.status(400).send({ error: 'Username is required' });
    }
    if (typeof (username) !== 'string') {
      return res.status(422).send({ error: 'Username must be a string' });
    }
    if (username.length <= 2) {
      return res.status(422).send({ error: 'Username must be longer than 2 characters' });
    }
    next();
  };

  public classeValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { classe } = req.body;
    if (!classe) {
      return res.status(400).send({ error: 'Classe is required' });
    }
    if (typeof (classe) !== 'string') {
      return res.status(422).send({ error: 'Classe must be a string' });
    }
    if (classe.length <= 2) {
      return res.status(422).send({ error: 'Classe must be longer than 2 characters' });
    }
    next();
  };

  public levelValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { level } = req.body;
    if (!level && level !== 0) {
      return res.status(400).send({ error: 'Level is required' });
    }
    if (typeof (level) !== 'number') {
      return res.status(422).send({ error: 'Level must be a number' });
    }
    if (level <= 0) {
      return res.status(422).send({ error: 'Level must be greater than 0' });
    }
    next();
  };

  public passwordValidation = (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const { password } = req.body;
    if (!password) {
      return res.status(400).send({ error: 'Password is required' });
    }
    if (typeof (password) !== 'string') {
      return res.status(422).send({ error: 'Password must be a string' });
    }
    if (password.length <= 7) {
      return res.status(422).send({ error: 'Password must be longer than 7 characters' });
    }
    next();
  };
}
