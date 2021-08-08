import React from 'react'
import './Style/Banner.css'


function Banner() {
    return (
        <div>
            <div className="Container">
                <div className="Row">

                    <div className="ColTwo">
                        <h1>Make yourself<br/> stylish!!</h1>
                        <p>If Shopping doesn't make you happy, then you're in the <br/>wrong shop</p>
                        <a href="" className="Btn">Explore Now &#8594;</a>
                    </div>

                    <div className="ColTwo">
                        <img src="/Image/thesassyclub/cover6.png" width="250px"/> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner
