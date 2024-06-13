import mongoose from 'mongoose';
import Joi from 'joi';


// const Schema = mongoose.Schema;

// const schema = new Schema(
//     {
//         title: { type: String, required: true, unique: true },
//         description: { type: String, default: '' },
//         image: { type: String, required: true }
//     }
// );


// const Category = mongoose.model('Category', schema);


// export {
//     Category
// }


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