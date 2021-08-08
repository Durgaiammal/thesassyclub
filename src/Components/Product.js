import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const {product} = props;
    return (
        <div className="womens-card">
            <div key={product._id} className="imgBx">
                <Link to={'/product/${product._id}'}>
                    <img 
                        src={product.image} 
                        alt={product.name} />
                </Link>
            </div>
            <div className="contentBx">
                <Link to={'/product/${product._id}'}>
                    <h3>{product.name}</h3>
                </Link>
                <h2 className="price">₹{product.price}</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>
        </div>
    )
}
