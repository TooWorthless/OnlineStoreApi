import mongoose from 'mongoose';
import Joi from 'joi';


// const Schema = mongoose.Schema;

// const schema = new Schema(
//     {
//         title: { type: String, required: true, unique: true },
//         categoryId: { type: String, required: true },
//         description: { type: String, default: '' },
//         price: { type: Number, required: true },
//         sizes: { type: [Number], default: [] },
//         images: { type: [String], default: [] }
//     }
// );


// const Product = mongoose.model('Product', schema);


// export {
//     Product
// }


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