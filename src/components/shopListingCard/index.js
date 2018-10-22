import React from 'react';

import './styles.css'


const ShopListingCard = (props) => {
    return ( 
        <div className="card__container"> 
            <img className="card__img"
                title={props.product.name}
                src={props.product.image} 
                alt="product"
            />
            <div className="card__info">
                <p className="card__title">{props.product.type}</p> 
                <p className="card__name">{props.product.name}</p> 
                <div className="card__desc">{props.product.description}</div>
                <div className="card__price-button">
                <button className="button" onClick={props.addItem}>add to cart</button>
                <p className="card__price">${props.product.price}</p>

                    {props.quantity > 0 &&
                        <p className="card__title card__quantity">Qty: {props.quantity}</p>
                    }

                </div>
            </div>
        </div>
     );
}
 
export default ShopListingCard;