import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import './Style/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="left">

                <div className="title">
                    <h1>SassyClub..</h1>
                </div>

                <p className="about simple-font">
                    SassyClub is, new start-up that enabled women from all over India to become independent by starting their own business. It is now easier than ever to earn money while
                    working from home. All you need is an internet connection and a desktop or mobile device.
                </p>

                <div className="contact">
                    <span><FaPhoneAlt/> 9876543210</span><br/>
                    <span><FaEnvelope/> thesassyclub.shop@gmail.com</span><br/>
                    <span><FaWhatsapp/> 9876543210</span>
                </div>
                <div className="social">
                    <div className="social-icon">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            
            <div className="right simple-font">
                <div className="useful-link">
                    <h3>Useful<br/>Links</h3>
                    <div className="link-item pointer"><a href="/">Home</a></div>
                    <div className="link-item pointer"><a href="/product:id">Product</a></div>
                    <div className="link-item pointer"><a href="/cart">Cart</a></div>
                    <div className="link-item pointer"><a href="#">Become a supplier</a></div>
                </div>

                <div className="useful-link">
                    <h3>Helpful<br/>Links</h3>
                    <div className="link-item pointer"><a href="#">FAQ</a></div>
                    <div className="link-item pointer"><a href="#">Shipping</a></div>
                    <div className="link-item pointer"><a href="#">Payments</a></div>
                    <div className="link-item pointer"><a href="#">Cancellation/Returns</a></div>
                </div>

                <div className="useful-link">
                    <h3>Legal</h3>
                    <div className="link-item pointer"><a href="#">Return Policy</a></div>
                    <div className="link-item pointer"><a href="#">Term of use</a></div>
                    <div className="link-item pointer"><a href="#">Privacy</a></div>
                </div>

            </div>
          
        </div>
    )
}

export default Footer
