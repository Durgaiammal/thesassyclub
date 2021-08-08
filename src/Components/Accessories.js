import React from 'react'
import './Style/Accessories.css'
import AccessoriesData from './Data/AccessoriesData'

function Accessories() {
    return (
        <div className="card">
            <div className=" comman-heading">
                <div className="comman-heading-left">
                    <h1> Best  of  Accessories </h1>
                    <h2>From ₹299</h2>
                </div>
                <div className="comman-heading-right">
                    <button>view all</button>
                </div>
            </div>


            <div className="comman-row">
                {
                    AccessoriesData.products.map((product) => (
                        <div key={product._id} className="comman-col">
                            <img 
                                src={product.image} 
                                alt={product.name}/>
                            <h3>{product.name}</h3>
                            <h4>{product.offer}</h4>
                            <h6>NOW ₹{product.price}</h6>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Accessories
