import React from 'react'
import { Link } from 'gatsby'
import { MyContext } from '../cartProvider'
import './styles.css'

const cartQuantity = (cart) => {

    let quantity = 0
    cart.map((item) => {
        quantity += item.quantity
    })
    return quantity
}

const NavBar = () => (
    <div>
        <MyContext.Consumer>
            {(context) => (
                <div className="navbar__container">
                    <Link to="/">home</Link>
                    <Link to="shop">shop</Link>
                    <Link to="cart">cart {cartQuantity(context.state.cartItems)}</Link>
                </div>
            )}
        </MyContext.Consumer>
    </div>
)

 
export default NavBar;