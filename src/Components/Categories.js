import React from 'react'
import './Style/Categories.css'

function Categories() {
    return (
        <div>
            <div className="CategoryRow">
                <div className="CategoryCol">
                    <img src="/Image/category/hp1.png" alt=""/>
                    <h5>Top Offers</h5>
                </div>
                
                <div className="CategoryCol">
                    <img src="/Image/thesassyclub/product/shoe.jpeg" alt=""/>
                    <h5>Bags &<br/>Footwear</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/thesassyclub/product/s-599307.jpg"  alt=""/>
                    <h5>Jewellery &<br/>Accessories</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/category/hp4.png" alt=""/>
                    <h5>Fashion</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/category/hp5.png" alt=""/>
                    <h5>Electronics</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/category/hp6.png" alt=""/>
                    <h5>Home &<br/>kitchen</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/category/hp7.png" alt=""/>
                    <h5>Beauty &<br/>Health</h5>
                </div>
                <div className="CategoryCol">
                    <img src="/Image/category/hp8.png" alt=""/>
                    <h5>Kids</h5>
                </div>                
            </div>
        </div>
    )
}

export default Categories

