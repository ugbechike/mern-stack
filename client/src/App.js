import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/layout/NavigationBar';
import Shirts from './pages/Shirts';
import Product from './pages/Produtcs';
import store from 'store2';
import Cart from './pages/Cart';



class App extends Component {

  constructor(props) {
    super(props)
    this.state ={ 
      itemsInCart: localStorage.getItem('item') || []
    }
    this.ProductPage = Product(this.addToCart)

  }

  componentDidMount() {
    document.addEventListener(
      'visibilitychange',
      () => {
        console.log('visibiltychange',  document.hidden)
        if(!document.hidden){
          this.setState({
            itemsInCart: store.get('item') || []
          })
        }
      }
    )
  }


  addToCart = (item) => {
    const {itemsInCart} = this.state;
    itemsInCart.push(item);
    this.setState({itemsInCart})
    store.set('item', itemsInCart)
  }

  removeItemFromCart = (index) => {
    const {itemsInCart} = this.state;
    itemsInCart.splice(index, 1);
    this.setState({itemsInCart})
  }

  render() {
  return (
    <Router>
      <NavBar
       isLoggedIn={true} 
       itemsInCart={this.state.itemsInCart.length}
       />
      <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/category/:slug' component={Shirts} exact />
        <Route path='/cart' component={props => <Cart {...props} items={this.state.itemsInCart} />} exact />
        <Route path='/products/:id' component={this.ProductPage} exact />
      </Switch>
      </div>
    </Router>
  )
  }
}

export default App;
