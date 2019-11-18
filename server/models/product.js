import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        images: {
            type: [String]
        },
        category: {
            type: [String]
        }
    }
    );

    export const ProductModel = mongoose.model('Product', ProductSchema);