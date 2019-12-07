import axios from './axios';
import Product from '../models/products';

export const getProduct = async (categories) => {
    try {
        const {data}  = await axios.get(
            `/v1/products${categories ? `?categories=${categories}` : ''}`
        )

    return data.map(product => new Product(product))
    } catch(err) {
        console.log(err)
    }
}



export const getProductById = async (id) => {
    try {
        const {data}  = await axios.get(
            `/v1/products/${id}`
        )

    return new Product(data)
    } catch(err) {
        console.log(err)
    }
}

