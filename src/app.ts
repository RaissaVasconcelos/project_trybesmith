import express from 'express';
import ProductController from './controller/product.controller';

const app = express();
// instanciando a classe productController
const product = new ProductController();

app.use(express.json());

// rotas
app.get('/products', (req, res) => product.findAll(req, res));
app.post('/products', (req, res) => product.insert(req, res));

export default app;
