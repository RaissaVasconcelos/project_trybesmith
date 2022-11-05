import express from 'express';
import ProductController from './controller/product.controller';
import UserController from './controller/user.controller';
import OrderController from './controller/order.controller';

const app = express();
// instanciando as classes
const product = new ProductController();
const user = new UserController();
const order = new OrderController();

app.use(express.json());

// rotas
app.get('/products', (req, res) => product.findAll(req, res));
app.post('/products', (req, res) => product.insert(req, res));
app.post('/users', (req, res) => user.insert(req, res));
app.get('/orders', (req, res) => order.getAll(req, res));

export default app;
