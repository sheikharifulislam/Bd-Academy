import React from 'react';
import '../ShopAndCartContainer.css';

const ProductCart = (props) => {  
    const cart = props.cart;
    
    const totalPrice = cart.reduce((previous, current) => previous += current.price * current.quantity, 0);
    const totalSelect = cart.reduce((previous, current) => previous += current.quantity, 0);

    return (
        <div className="products-cart-section">
          <div className="product-cart">
                <h3 className="select-all-product">Total Selact Items: {totalSelect}</h3>
                <p>Total Cost {totalPrice}</p>

                {
                    cart.map((product) => <li className="added-curse-name">{product.courseName}</li> )
                }
          </div>
        </div>
    );
};

export default ProductCart;