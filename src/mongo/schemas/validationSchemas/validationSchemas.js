import { categorySchemaDefinition } from '../entitySchemas/category.schema.js';
import { productSchemaDefinition } from '../entitySchemas/product.schema.js';
import { userSchemaDefinition } from '../entitySchemas/user.schema.js';
import { createJoiSchema } from '../schemaFactory.js';

const categorySchema = createJoiSchema(categorySchemaDefinition);
const productSchema = createJoiSchema(productSchemaDefinition);
const userSchema = createJoiSchema(userSchemaDefinition);

export { 
    categorySchema, 
    productSchema, 
    userSchema 
};