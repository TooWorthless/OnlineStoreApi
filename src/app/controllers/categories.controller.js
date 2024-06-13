import Category from '../models/category.model.js';

const categoriesController = {};


categoriesController.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({}).select('-__v');
        res.json(categories);
    } catch (error) {
        next(error);
    }
};


categoriesController.getCategoryById = async (req, res, next) => {
    try {
        if (!req.params) throw new Error('Incorrect params');
        const categoryId = req.params.id;
        const category = await Category.findOne({ _id: categoryId }).select('-__v');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        next(error);
    }
};


categoriesController.createCategory = async (req, res, next) => {
    try {
        const { title, description, image } = req.body;
        const category = new Category({ title, description, image });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};


categoriesController.updateCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const updates = req.body;
        const category = await Category.findByIdAndUpdate(categoryId, updates, { new: true }).select('-__v');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        next(error);
    }
};


categoriesController.deleteCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


export default categoriesController;
