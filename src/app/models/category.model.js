import mongoose from 'mongoose';
import { categorySchemaDefinition } from '../../mongo/schemas/entitySchemas/category.schema.js';
import { createMongooseSchema } from '../../mongo/schemas/schemaFactory.js';

const categorySchema = createMongooseSchema(categorySchemaDefinition);
const Category = mongoose.model('Category', categorySchema);

export default Category;