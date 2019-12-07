
import React, {useState, useEffect} from 'react';
// import { data } from '../mock/productsMock'
import ProductList from '../components/products/ProductList';
import '../App.css';
import {getProduct } from '../api/products';

const Shirts = (props) => {
const [products, setProducts] = useState([]);
const [slugs, setSlugs] = useState(undefined)

console.log('params', props.match.params)

useEffect(() => {
    const { slug } = props.match.params

  const fetchData = async () => {
    const productList = await getProduct(slug);
    console.log('home', productList)
    setProducts(productList);
  }

  fetchData()

  return () => {

  }
}, [])

  return (
    <div className='APP'>
      <ProductList product={products}/>
    </div>
  );
}

export default Shirts;
