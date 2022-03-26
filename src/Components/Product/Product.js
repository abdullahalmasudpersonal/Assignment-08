
import React from 'react';
import './Product.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product, handleAddToCart}=props;
    const { name, image, id, price, stock } = product;

    return (
        <div className='prodcut '>
            <img src={image} alt='' />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5>Price: ${price}</h5>
                <h6>ID: {id}</h6>
                <p>Stock: {stock}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)}  className='btn-cart'>
                <p className='btn-text fw-bold'>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;