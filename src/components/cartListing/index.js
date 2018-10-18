import React from 'react';
import { MyContext } from '../cartProvider'
import CartCard from '../cartCard'

function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  

const CartListing = () => (  
    <MyContext.Consumer>
        {(context) => (
            <div>
            <h2 className="cart__title">My Bag</h2>
                <div className="cart__card-holder">
                    {
                        (context.state.cartItems).sort(compare).map(item => {
                            return(  
                                <div>
                                    <div className="cart__holder"> 
                                        <div className="cart__card" key={item._id}>
                                            <CartCard
                                                updateQty={() => context.UpdateItem(item)}
                                                product={item} 
                                                removeAll={() => context.RemoveAll(item)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h4 className="cart__total">sub-total <span className="cart__dollars">$</span></h4>
                <div className="cart__button-holder">
                    <div className="button cart__button" onClick={() => console.log('yo')}>Checkout</div>
                </div>
            </div>
        )}
    </MyContext.Consumer>
);


 
export default CartListing;