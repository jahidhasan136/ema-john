import React from 'react';
import './ProductReview.css'
import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Rating from 'react-rating';

const ProductReview = () => {

    const product = useLoaderData()

    const { name, img, price, ratings, } = product

    const [inputValue, setInputValue] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setOutputValue(inputValue);
        setShowInfo(true);
    };


    return (
        <div className='review-product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2>{name}</h2>
                <h4>${price}</h4>
                <p>{showInfo ? <div>{outputValue}</div> : 'There are no review yet*'}</p>
                <div>
                    <p>Your rating*</p>
                    <Rating
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar className='text-warning'></FaStar>}>
                    </Rating>
                </div>
                <div className='review-field'>
                    <label htmlFor="my-input">Your review*</label>
                    <textarea cols="50" rows="10" id="my-input" type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleButtonClick}>Submit</button>
                </div>
            </div>


        </div>
    );
};

export default ProductReview;