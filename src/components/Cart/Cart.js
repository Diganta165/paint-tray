import React from 'react';
import BoughtPaints from '../BoughtPaints/BoughtPaints';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let totalCost = cart.reduce((previous, current)=> previous + current.price,0)

    return (
        <div className="cart-section">
            <h1>Paints Bought: {props.cart.length} </h1>
            <h1>Total Cost: {totalCost}</h1>
            <h1>Bought Paints</h1>
            {
                cart.map(boughtPaint => <BoughtPaints boughtPaint ={boughtPaint} key ={boughtPaint.id}></BoughtPaints>)
            }
        </div>
    );
};

export default Cart;