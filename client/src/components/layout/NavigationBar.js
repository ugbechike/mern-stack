import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
const {isLoggedIn, itemsInCart} = props

    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/category/shirt'>Shirts</NavLink>
                </li>
                {
                    isLoggedIn ?
                <ul>
                <li>
                <NavLink to='/orders'>Orders</NavLink>
                </li>
                <li>
                <NavLink to='/cart'>My Cart ({itemsInCart})</NavLink>
                </li>
                <li>
                </li>
                <li>
                <NavLink to='/account'>Accounts</NavLink>
                </li>
                </ul>
                :
                <li>
                <NavLink to='/login'>Login</NavLink>
                </li>
                }
            </ul>
        </div>
    )
}

export default NavBar