import jwt from 'jsonwebtoken';
import IJwt from '../interfaces/jwtInterface';

export const verifyToken = (token: string) => {
  const decodedToken = jwt.verify(token, 'secret');
  return decodedToken as IJwt;
};

export const isValidToken = (token: string) => {
  try {
    const data = verifyToken(token);
    const [id, username]: string[] = Object.keys(data);
    if (id === 'id' && username === 'username') {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
