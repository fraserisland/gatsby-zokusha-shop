import React, { Component } from 'react'
import Layout from '../components/layout'
import ShopListing from '../components/shopListing'

class Shop extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout>
                <div>
                    <ShopListing />
                </div>
            </Layout>
        );
    }
}
 
export default Shop;