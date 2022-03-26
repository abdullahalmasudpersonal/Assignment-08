
import React from 'react';
import './Cart.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected your product</h3>
            <div className='div-cart-btn'>
            <p> <button className='cart-btn'> CHOOSE 1 FOR ME</button></p>
            <p>
            <button className='cart-btn'> CHOOSE AGAIN</button>
            </p>
            </div>

        </div>
    );
};

export default Cart;