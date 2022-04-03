
import React from 'react';
import './Cart.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cart = () => {
    return (
        <div className='cart '>
            <h3 className='fw-bold'>Selected your product</h3>
            <div>
            <p> <button className='cart-btn fw-bold'> CHOOSE 1 FOR ME</button></p>
            <p>
            <button className='cart-btn fw-bold'> CHOOSE AGAIN</button>
            </p>
            </div>

        </div>
    );
};

export default Cart;