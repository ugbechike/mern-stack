import React from 'react';
// import logo from './logo.svg';
import './ProductList.css';
import ProductCard from './ProductsCards';


const ProductList = ({product}) => {
  // console.log('productList', product)
  return (
    <div className="productList">
      {product.map( (products, index) => (
        // console.log('mapped',products._images),
        <ProductCard
        key={products.getId()}
        name={products.getName()}
        price={products.getFormattedPrice()}
        images={products.getImages()}
        pull={index % 2 === 0}/>
      ))}
    </div>
  );
}

export default ProductList;
