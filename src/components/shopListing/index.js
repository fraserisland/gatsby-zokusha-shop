import React, { Component } from 'react';
import data from '../../items.json'
import { MyContext } from '../cartProvider'
import ShopListingCard from '../shopListingCard'

class ShopListing extends Component {

    cartQuantity = (cart, product) => {
        let quantity = null
        cart.map((cartItem) => {
            if(product.id == cartItem.id){
                quantity = cartItem.quantity
            }
        })
        return quantity
    }

    render() { 

        return (  
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div  className="shop-listing__container">
                            {
                                data.products.map(product => {
                                    return (
                                        <div>
                                            <ShopListingCard  
                                            addItem={() => context.AddItem(product)} 
                                            product={product}
                                            quantity={this.cartQuantity(context.state.cartItems, product)}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}
 
export default ShopListing;