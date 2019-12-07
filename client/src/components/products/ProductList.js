import React from 'react';
// import logo from './logo.svg';
import './ProductList.css';
import ProductCard from './ProductsCards';
import  { Link } from 'react-router-dom';


const ProductList = ({product}) => {
  // console.log('productList', product)
  return (
    <div className="productList">
      {product.map( (products, index) => (
        // console.log('mapped',products._images),
        <Link 
        key={products.getId()}
        to={`/products/${products.getId()}`}
        style={
          index % 2 === 0 ? {
              alignSelf: 'flex-end'
          } : null
      }
        >
        <ProductCard
        name={products.getName()}
        price={products.getFormattedPrice()}
        images={products.getImages()}
        />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
