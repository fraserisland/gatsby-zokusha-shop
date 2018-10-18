import React, {Component} from 'react';
import './styles.css'
import '../cartListing/styles.css'
import cross from './multiply.svg'
import Select from 'react-select';

const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
    { value: 16, label: "16" },
    { value: 17, label: "17" },
    { value: 18, label: "18" },
    { value: 19, label: "19" },
    { value: 20, label: "20" },
    { value: 21, label: "21" },
    { value: 22, label: "22" },
    { value: 23, label: "23" },
    { value: 24, label: "24" },
    { value: 25, label: "25" },
    { value: 26, label: "26" },
    { value: 27, label: "27" },
    { value: 28, label: "28" },
    { value: 29, label: "29" },
    { value: 30, label: "30" }
];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: '24px',
      'min-height': '24px',
      'font-size': '13px',
      'margin-left': '10px'
    }),
};

class CartCard extends Component {
    state = {
        donkey: 1
    }

    handleChange = (value) => {
        this.props.product.newQty = value.value
        this.props.updateQty(this.props.product)
    }

    render(){
        const { selectedOption } = this.state;
    return ( 
        <div className="cart-card__container"> 
            <img className="cart-card__img"
                title={this.props.product.name}
                src={this.props.product.image} 
            />
            <div>
                <p className="cart-card__price">${this.props.product.price}</p>
                <div className="cart-card__desc">
                    <p className="card__title">{this.props.product.type}</p> 
                    <p className="card__name">{this.props.product.name}</p> 
                </div>
                <div className="card__qty-holder">
                Qty
                <Select
                    className="dropdown__qty"
                    styles={customStyles}
                    placeholder={this.props.product.quantity}
                    value={selectedOption}
                    onChange={(value) => this.handleChange(value)}
                    options={options}
                />
                </div>
            </div>
            <div className="cross-holder">
                <img className="cursor cross" src={cross} onClick={this.props.removeAll} />
            </div>
        </div>
     );
    }
}

export default CartCard