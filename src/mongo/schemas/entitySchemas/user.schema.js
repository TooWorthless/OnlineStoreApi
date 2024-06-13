import mongoose from 'mongoose';
import Joi from 'joi';


const userSchemaDefinition = {
    username: {
        type: String,
        required: true,
        unique: true,
        joi: Joi.string().required()
    },
    password: {
        type: String,
        required: true,
        joi: Joi.string().required()
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
        joi: Joi.string().valid('user', 'admin').default('user')
    }
};

export {
    userSchemaDefinition
}