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
}