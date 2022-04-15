import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
// Requisito 01 - Crie um endpoint para a listagem de produtos
// Requisito 02 - Crie um endpoint para o cadastro de produtos
app.use('/products', router.productsRouter);
// Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
app.use('/users', router.usersRouter);
// Requisito 04 - Crie um endpoint para listar todos os pedidos
// Requisito 06 - Crie um endpoint para o cadastro de um pedido
app.use('/orders', router.ordersRouter);
// Requisito 05 - Crie um endpoint para o login de pessoas usuárias
// app.use('/login', router.loginRouter);

export default app;
