import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/ordersInterfaces';
import connection from './connection';
// ref.: https://universodosdados.com/2018/12/03/os-super-poderes-das-de-transformacao/
const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT  
      Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) as products
    FROM 
      Trybesmith.Orders  
    JOIN
      Trybesmith.Products 
    ON
      Orders.id = Products.orderId
    GROUP BY
      Orders.id ORDER BY Orders.userId;`,
  );
  return result as IOrder[];
};

export default {
  getAll,
}; 
