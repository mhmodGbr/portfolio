import React from "react";
import './Footer.css'


const Footer = () => {
    return(
        <div className="Footer" id="Footer">
            <div className="Links">
                <a href="#">Contact</a>
                <a href="#">Forum</a>
                <a href="#">Affiliate</a>
                <a href="#">FAQ</a>
            </div>

            <div className="social-icons">
                <div>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-solid fa-phone"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
