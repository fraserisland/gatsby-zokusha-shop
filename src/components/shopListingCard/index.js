import React from 'react';

import './styles.css'


const ShopListingCard = (props) => {
    return ( 
        <div className="card__container"> 
            <img className="card__img"
                title={props.product.name}
                src={props.product.image} 
                alt="product image"
            />
            <div className="card__info">
                <p className="card__title">{props.product.type}</p> 
                <p className="card__name">{props.product.name}</p> 
                <div className="card__desc">{props.product.description}</div>
                <div className="card__price-button">
                <button onClick={props.addItem}>add to cart</button>
 
                    {props.quantity > 0 &&
                        <p>Qty: {props.quantity}</p>
                    }
                    <p className="card__price">${props.product.price}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ShopListingCard;