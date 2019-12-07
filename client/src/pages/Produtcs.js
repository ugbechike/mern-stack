
import React, {Component} from 'react';
// import { data } from '../mock/productsMock'
import ProductView from '../components/products/ProductView';
import '../App.css';
import { getProductById } from '../api/products';


// todo move to functional hooks
class Product extends Component {
    state = {
        product: [],
        loading: false
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        const product = await getProductById(id);
        this.setState({product: product})
    }

    render() {
        return (
            <div className='APP'>
                {/* {console.log(this.state.product._name)} */}
            <ProductView 
            product={this.state.product}
            addToCart={this.props.addToCart}
            />
            </div>
        )
    }
}



//todo degug this
// const Product = (props) => {
// const [products, setProducts] = useState([])

// useEffect(() => {
//     const { id } = props.match.params
//   const fetchData = async () => {
//     const productList = await getProductById(id);
//     console.log('single product', productList)
//     setProducts(productList);
//   }

//   fetchData()

//   return () => {

//   }
// }, [])

//   return (
//     <div className='APP'>
//       <ProductView product={products}/>
//     </div>
//   );
// }

export default (addToCart) => (props) => <Product {...props} addToCart={addToCart} />;
