import mongoose from 'mongoose';
import Joi from 'joi';
import bcrypt from 'bcryptjs';


// const Schema = mongoose.Schema;

// const schema = new Schema(
//     {
//         username: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         role: { type: String, default: 'user', enum: ['user', 'admin'] },
//     }
// );

// schema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// schema.methods.matchPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };


// const User = mongoose.model('User', schema);


// export {
//     User
// };


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