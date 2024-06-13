import { Router } from 'express';
import categoriesController from '../controllers/categories.controller.js';
import { jwtAuthMiddleware, rbacAuthMiddleware } from '../middlewares/auth.middleware.js';
import { validateMiddleware } from '../middlewares/validate.middleware.js';
import { categorySchema } from '../../mongo/schemas/validationSchemas/validationSchemas.js';


const categoriesRouter = Router();


categoriesRouter.use(jwtAuthMiddleware);

categoriesRouter.get('/', categoriesController.getCategories);

categoriesRouter.get('/:id', categoriesController.getCategoryById);

categoriesRouter.post('/', 
    rbacAuthMiddleware('admin'), 
    validateMiddleware(categorySchema),
    categoriesController.createCategory
);

categoriesRouter.put('/:id', 
    rbacAuthMiddleware('admin'), 
    validateMiddleware(categorySchema),
    categoriesController.updateCategory
);

categoriesRouter.delete('/:id', 
    rbacAuthMiddleware('admin'), 
    validateMiddleware(categorySchema),
    categoriesController.deleteCategory
);


export default categoriesRouter;