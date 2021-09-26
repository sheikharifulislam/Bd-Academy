import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './singleProduct.css';

const SingleProduct = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
   const {courseName, image,mainPrice,offerPrice,teacher,totalReview,totalStar} = props.product;
   const discount = Math.round(((mainPrice - offerPrice) / mainPrice) * 100);
   const star = totalStar / totalReview; 

    return (
        <div className="single-course">
            <div className="course-container">
                <div className="course-image">
                    <img src={image} alt="" />
                </div>
                <div className="course-info">
                    <div className="course-name">
                        <h3>{courseName}</h3>
                    </div>
                    <div className="course-teacher-name">
                        <p>{teacher}</p>
                    </div>
                    <div className="course-price">
                        <div className="offer-course-price">
                            <span className="currency">৳</span>
                            <span className="price">{offerPrice}</span>
                        </div>
                        <div className="normal-course-price">
                            <span className="price"><strike>৳{mainPrice}</strike></span>
                            <span className="discount">-{discount}%</span>
                        </div>                        
                    </div>
                    <div className="single-course-footer">
                        <div className="course-rating">
                            <div className="course-rating-icon">
                                    <Rating readonly
                                    initialRating= {star}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    >
                                    </Rating>
                            </div>
                            <div className="course-rating-comment">
                                <span>({totalReview})</span>
                            </div>
                        </div>
                        <div className="add-to-cart-btn">
                            <button onClick={() => props.handelCart( props.product)}>{cartIcon}Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;