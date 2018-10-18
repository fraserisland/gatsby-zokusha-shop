import React from 'react';

export const MyContext = React.createContext()

export class CartProvider extends React.Component {
  state = {
    cartItems: [],
  }

  componentDidMount(){
    if(localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) })
    }
  }

  render() {
      const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

      const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

      const addToCart = (cart, item) => {
      const cartItem = itemInCart(cart, item)
        return cartItem === undefined
        ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
        : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity +1}]
      }

      const removeFromCart = (cart, item) => {
        return item.quantity === 1
        ? [ ...cartWithoutItem(cart,item) ]
        : [ ...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1} ]
      }

      const removeAllFromCart = (cart, item) => {
        return [...cartWithoutItem(cart, item)]
      }

      const updateQty = (cart, item) => {
        const cartItem = itemInCart(cart, item)
        return [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.newQty }]
      }

    return (
      <MyContext.Provider 
      value={{
        state: this.state,

        AddItem: (item) => {
          const newCart = addToCart(this.state.cartItems, item)
          this.setState({ cartItems: newCart })
          localStorage.setItem('cartItems', JSON.stringify(newCart))
          console.log(this.state.cartItems)
        },

        RemoveItem: (item) => {
          const newCart = removeFromCart(this.state.cartItems, item)
          this.setState({ cartItems: newCart })
          localStorage.setItem('cartItems', JSON.stringify(newCart))
          console.log(newCart)
        },

        UpdateItem: (item) => {
          const newCart = updateQty(this.state.cartItems, item)
          this.setState({ cartItems: newCart })
          localStorage.setItem('cartItems', JSON.stringify(newCart))
          console.log(newCart)
        },

        RemoveAll: (item) => {
          const newCart = removeAllFromCart(this.state.cartItems, item)
          this.setState({ cartItems: newCart })
          localStorage.setItem('cartItems', JSON.stringify(newCart))
          console.log(newCart)
        }

      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
