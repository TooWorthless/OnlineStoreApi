import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { userSchemaDefinition } from '../../mongo/schemas/entitySchemas/user.schema.js';
import { createMongooseSchema } from '../../mongo/schemas/schemaFactory.js';

const userSchema = createMongooseSchema(userSchemaDefinition);

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;