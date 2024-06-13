import mongoose from 'mongoose';
import Joi from 'joi';


const productSchemaDefinition = {
    title: {
        type: String,
        required: true,
        unique: true,
        joi: Joi.string().required()
    },
    categoryId: {
        type: String,
        required: true,
        joi: Joi.string().required()
    },
    description: {
        type: String,
        default: '',
        joi: Joi.string().allow('').optional()
    },
    price: {
        type: Number,
        required: true,
        joi: Joi.number().required()
    },
    sizes: {
        type: [Number],
        default: [],
        joi: Joi.array().items(Joi.number()).optional()
    },
    images: {
        type: [String],
        default: [],
        joi: Joi.array().items(Joi.string()).optional()
    }
};

export {
    productSchemaDefinition
};