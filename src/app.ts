import express from 'express';
import productsController from './controller/productsController';
import ordersController from './controller/ordersController';

const app = express();

app.use(express.json());
// Requisito 01 - Crie um endpoint para a listagem de produtos
app.get('/products', productsController.getAll);
// Requisito 02 - Crie um endpoint para o cadastro de produtos
// app.post('/products');
// Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
// app.post('/users');
// Requisito 04 - Crie um endpoint para listar todos os pedidos
app.get('/orders', ordersController.getAll);

export default app;
