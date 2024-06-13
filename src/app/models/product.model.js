import mongoose from 'mongoose';
import { productSchemaDefinition } from '../../mongo/schemas/entitySchemas/product.schema.js';
import { createMongooseSchema } from '../../mongo/schemas/schemaFactory.js';

const productSchema = createMongooseSchema(productSchemaDefinition);
const Product = mongoose.model('Product', productSchema);

export default Product;