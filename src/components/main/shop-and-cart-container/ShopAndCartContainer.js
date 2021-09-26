import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllProduct from './all-product/AllProduct';
import ProductCart from './product-cart/ProductCart';
import {getDataFromDb,addToLs } from '../../../database/Db';
import './ShopAndCartContainer.css';


const ShopAndCartContainer = () => {

    const [products, setProducts] = useState([]);

   

    useEffect(() => {
        fetch('./courseData.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error.message))
    },[])

    const [cart, setCart] = useState([]);

    useState(() => {
        const newCart = getDataFromDb();      
        setCart(newCart);   
       },[])
    
    
    const handelCart = (product) => {
        addToLs(product);     
        const newCart = getDataFromDb();
               
        setCart(newCart);          
         
    }
    
  

    return (
        <div className="shop-and-cart-section">
           <div className="shop-and-cart-container">
                <AllProduct products = {products}
                 handelCart = {handelCart}             
                ></AllProduct>
                <ProductCart
                    cart = {cart}
                ></ProductCart>
           </div>
        </div>
    );
};

export default ShopAndCartContainer;