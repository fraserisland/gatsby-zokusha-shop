import React from "react"

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 2500

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: "BUY NOW",
    paymentMessage: "",
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: "Pay now" })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      key: "pk_test_OiEWust5llK3pQZgO1vzEQwo",
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: "WAITING..." })
    this.stripeHandler.open({
      name: "Demo Product",
      amount: amount,
      description: "A product well worth your time",
      token: token => {
        fetch(`AWS_LAMBDA_URL`, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then(res => {
            console.log("Transaction processed successfully")
            this.resetButton()
            this.setState({ paymentMessage: "Payment Successful!" })
            return res
          })
          .catch(error => {
            console.error("Error:", error)
            this.setState({ paymentMessage: "Payment Failed" })
          })
      },
    })
  }

  render() {
    return (
      <div>
        <button
          className="button"
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default Checkout