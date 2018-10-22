import React from 'react'
import PropTypes from 'prop-types'
import { CartProvider, MyContext } from './cartProvider'
import NavBar from './navbar'
import Helmet from 'react-helmet'
import './styles.css'

const Layout = ({ children }) => (
      <CartProvider>
        <Helmet
        title="Zokusha Tribe JDM shop"
        meta={[
          { name: 'description', content: 'Zokusha Tribe Shop' },
          { name: 'keywords', content: 'zokusha, tribe, jdm, shakotan, cars, shop' },
        ]}>
          <html lang="en" />
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
