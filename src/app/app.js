import express from 'express';
import { connect } from '../mongo/db.js';
import productsRouter from './routers/products.router.js';
import categoriesRouter from './routers/categories.router.js';
import authRouter from './routers/auth.router.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cors from 'cors';

import { configDotenv } from 'dotenv';
const config = configDotenv().parsed;
connect(config.DB_URL);

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/auth', authRouter);



app.use(errorMiddleware);


app.listen(config.PORT, () => {
    console.log(`Express.js Service started on port ${config.PORT}`);
});