import mongoose from 'mongoose';
import Joi from 'joi';


const categorySchemaDefinition = {
    title: {
        type: String,
        required: true,
        unique: true,
        joi: Joi.string().required()
    },
    description: {
        type: String,
        default: '',
        joi: Joi.string().allow('').optional()
    },
    image: {
        type: String,
        required: true,
        joi: Joi.string().required()
    }
};


export {
    categorySchemaDefinition
};