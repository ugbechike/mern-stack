import React, {Component} from 'react';


class ProductView extends Component {

    addToCart = () => {
        console.log('xjjjjjxj', this.props.product)
        this.props.addToCart(this.props.product.getData())
    }


    render() {
        return (
            <div>
            <h1>{this.props.product._name}</h1>
            <p>{this.props.product._price}</p>
            <button onClick={this.addToCart}>
                Add to cart
            </button>
            {/* {props.product._images.map(src =>
                <img src={src} key={src} />
                )} */}
        </div>
        )
    }

}



// const ProductView = (props) => {
//     console.log('productView',props.product)

//     return (
//         <div>
//             <h1>{props.product._name}</h1>
//             <p>{props.product._price}</p>
//             <button>
//                 Add to cart
//             </button>
//             {/* {props.product._images.map(src =>
//                 <img src={src} key={src} />
//                 )} */}
//         </div>
//     )
// }

export default ProductView;