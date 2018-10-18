import React, { Component } from 'react';
import Layout from '../components/layout'
import CartListing from '../components/cartListing'

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout>
                <div>
                    <CartListing />
                </div>
            </Layout>
        );
    }
}
 
export default Cart;