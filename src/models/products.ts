import connection from './connection';
// Requisito 02 - Crie endpoints para listar os produtos e as vendas
const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');

  return products;
};