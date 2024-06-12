import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';


const productsRouter = Router();


productsRouter.use(authMiddleware);
productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.get('/category/:id', productsController.getProductsByCategoryId);
productsRouter.post('/', productsController.createProduct);
productsRouter.put('/:id', productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);


export default productsRouter;