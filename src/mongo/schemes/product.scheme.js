import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        categoryId: { type: String, required: true },
        description: { type: String, default: '' },
        price: { type: Number, required: true },
        sizes: { type: [Number], default: [] },
        images: { type: [String], default: [] }
    }
);


const Product = mongoose.model('Product', schema);


export {
    Product
}