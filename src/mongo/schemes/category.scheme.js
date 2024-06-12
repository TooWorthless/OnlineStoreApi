import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, default: '' },
        image: { type: String, required: true }
    }
);


const Category = mongoose.model('Category', schema);


export {
    Category
}