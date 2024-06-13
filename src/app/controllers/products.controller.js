import Product from '../models/product.model.js';

const productsController = {};


productsController.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({}).select('-__v');
        res.json(products);
    } catch (error) {
        next(error);
    }
};


productsController.getProductById = async (req, res, next) => {
    try {
        if (!req.params) throw new Error('Incorrect params');
        const productId = req.params.id;
        const product = await Product.findOne({ _id: productId }).select('-__v');
        res.json(product);
    } catch (error) {
        next(error);
    }
};


productsController.getProductsByCategoryId = async (req, res, next) => {
    try {
        if (!req.params) throw new Error('Incorrect params');
        const categoryId = req.params.id;
        const products = await Product.find({ categoryId }).select('-__v');
        res.json(products);
    } catch (error) {
        next(error);
    }
};


productsController.createProduct = async (req, res, next) => {
    try {
        const { title, categoryId, description, price, sizes, images } = req.body;
        const product = new Product({ title, categoryId, description, price, sizes, images });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};


productsController.updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const updates = req.body;
        const product = await Product.findByIdAndUpdate(productId, updates, { new: true }).select('-__v');
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
};

productsController.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


export default productsController;
