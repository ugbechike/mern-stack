import React, {Component} from 'react';
import Product from '../models/products';
import ProductCard from '../components/products/ProductsCards';


class Cart extends Component {


    render(){
        return (
            <div className='cart'>
                <h1>My cart</h1>
                {
                    this.props.items.length > 0 ?
                    <div>
                        {
                            this.props.items.map(item => new Product(item))
                            .map(item => 
                            <ProductCard 
                            key={item.getId()}
                            name={item.getName()}
                            images={item.getImages()}
                            price={item.getFormattedPrice()}
                            />)
                        }
                        <button>checkout</button>
                    </div> 
                     :
                    <p>Your cart is empty</p> 
                }
            </div>
        )
    }
}

export default Cart;