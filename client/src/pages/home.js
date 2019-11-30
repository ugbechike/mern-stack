
import React, {useState, useEffect} from 'react';
// import { data } from '../mock/productsMock'
import ProductList from '../components/products/ProductList';
import '../App.css';
import {getProduct } from '../api/products';

const Home = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const productList = await getProduct();
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

export default Home;
