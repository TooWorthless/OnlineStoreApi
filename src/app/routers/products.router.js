import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
import { jwtAuthMiddleware } from '../middlewares/auth.middleware.js';
import { rbacAuthMiddleware } from '../middlewares/auth.middleware.js';
import { validateMiddleware } from '../middlewares/validate.middleware.js';
import { productSchema } from '../../mongo/schemas/validationSchemas/validationSchemas.js';



const productsRouter = Router();


productsRouter.use(jwtAuthMiddleware);
productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.get('/category/:id', productsController.getProductsByCategoryId);
productsRouter.post('/', 
    rbacAuthMiddleware('admin'), 
    validateMiddleware(productSchema), 
    productsController.createProduct
);
productsRouter.put('/:id', 
    rbacAuthMiddleware('admin'), 
    validateMiddleware(productSchema),
    productsController.updateProduct
);
productsRouter.delete('/:id', rbacAuthMiddleware('admin'), productsController.deleteProduct);


export default productsRouter;