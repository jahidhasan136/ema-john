import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faRightFromBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                </div>
                <div className='btn-cart '>
                    <div onClick={() => handleAddToCart(props.product)} className='cart-item'>
                        <p>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className='review'>
                        <p>Review</p>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </div>
                </div>
            </div>
    );
};

export default Product;