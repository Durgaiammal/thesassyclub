import React from 'react'
import Data from '../Components/Data/Data'

function ProductDetailScreen(props) {
    const product = Data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div>not found</div>
    }
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        
                        <li>Price : ₹{product.price}</li>
                        <li>description : 
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">₹{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="error">Unavailable</span>
                                        )}
                                        </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailScreen
