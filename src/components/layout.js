import React from 'react'
import PropTypes from 'prop-types'
import { CartProvider, MyContext } from './cartProvider'
import NavBar from './navbar'
import './styles.css'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
      <CartProvider>
        <Helmet>
          <script src="https://js.stripe.com/v3/"></script>
        </Helmet>
        <div className="holder">
          <NavBar />
          {children}
        </div>
      </CartProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
