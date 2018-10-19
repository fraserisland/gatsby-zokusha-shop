import React from 'react'
import { Link } from 'gatsby'
import { MyContext } from '../cartProvider'
import bag from './shopping-bag.svg'
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
                    <Link className="nav__link" to="/">home</Link>
                    <Link className="nav__link" to="shop">shop</Link>
                    <Link className="nav__link" to="cart"><img className="nav__cart" src={bag} /><div className="nav__cart-items"><span>{cartQuantity(context.state.cartItems)}</span></div></Link>
                </div>
            )}
        </MyContext.Consumer>
    </div>
)

 
export default NavBar;