import React from 'react'
import './Style/WomensProduct.css'
import Data from './Data/Data'
import Product from './Product'

function WomensProducts() {
    return (
        <div className="womens-container">
            <div className="row">

                <div className="col">
                    {
                        Data.products.map((product) => (
                            <Product key={product._id} product = {product}></Product>
                        ))
                    }                                   
                </div>
                                        
            </div>

        </div>
    )
}

export default WomensProducts
