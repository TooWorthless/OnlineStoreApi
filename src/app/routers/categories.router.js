import { Router } from 'express';
import categoriesController from '../controllers/categories.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';


const categoriesRouter = Router();


categoriesRouter.use(authMiddleware);
categoriesRouter.get('/', categoriesController.getCategories);
categoriesRouter.get('/:id', categoriesController.getCategoryById);
categoriesRouter.post('/', categoriesController.createCategory);
categoriesRouter.put('/:id', categoriesController.updateCategory);
categoriesRouter.delete('/:id', categoriesController.deleteCategory);


export default categoriesRouter;