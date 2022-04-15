import jwt from 'jsonwebtoken';
import { JwtUser } from '../interfaces/usersInterfaces';

const secret = 'secret';

const generateToken = (payload: JwtUser) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export default generateToken;
