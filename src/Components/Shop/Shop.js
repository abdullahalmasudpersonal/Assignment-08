import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useState(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleAddToCart= (product)=>{
        console.log(product);
    }

    return (
        <div className=' shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Selected your product</h3>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;