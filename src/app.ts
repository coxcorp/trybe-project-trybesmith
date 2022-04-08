import express from 'express';
import ordersController from './controller/ordersController';
import productsRouter from './routes/productsRouter';

const app = express();

app.use(express.json());
// Requisito 01 - Crie um endpoint para a listagem de produtos
// Requisito 02 - Crie um endpoint para o cadastro de produtos
app.use('/products', productsRouter);
// Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
// app.post('/users');
// Requisito 04 - Crie um endpoint para listar todos os pedidos
app.get('/orders', ordersController.getAll);

export default app;
