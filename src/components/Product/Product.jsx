import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faRightFromBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import taka from '../../assets/taka.png'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { img, name, seller, id, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: <img src={taka} alt="" />{price}</p>
                <p>Manufacturer: {seller}</p>
            </div>
            <div className='btn-cart '>
                <div onClick={() => handleAddToCart(props.product)} className='cart-item'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <Link to={`/review/${id}`} className='review'>
                    <p>Review</p>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </Link>
            </div>
        </div>
    );
};

export default Product;