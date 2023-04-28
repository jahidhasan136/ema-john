import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductReview = () => {

    const product = useLoaderData()

    return (
        <div>
            <h3>{product.name}</h3>
        </div>
    );
};

export default ProductReview;