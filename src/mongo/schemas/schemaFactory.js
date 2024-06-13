import Joi from 'joi';
import mongoose from 'mongoose';


const createMongooseSchema = (definition) => {
    const mongooseSchemaDefinition = {};
    for (const [key, value] of Object.entries(definition)) {
        mongooseSchemaDefinition[key] = {
            type: value.type,
            required: value.required,
            unique: value.unique || false,
            default: value.default || undefined,
            enum: value.enum || undefined
        };
    }
    return new mongoose.Schema(mongooseSchemaDefinition);
};

const createJoiSchema = (definition) => {
    const joiSchemaDefinition = {};
    for (const [key, value] of Object.entries(definition)) {
        if (key === 'role') continue;
        joiSchemaDefinition[key] = value.joi;
    }
    return Joi.object(joiSchemaDefinition);
};


export {
    createMongooseSchema,
    createJoiSchema
};