import React , { Fragment }from "react";
import './Header.css' ;

const Header = () => {
    return(
        <Fragment>
            <header id="header">
            <div class="intro intro3">
            <div class="Header-container">
                <div class="row">
                    <div class="col-md-5 col-sm-6">
                            <h3>Welcome TO My Portfolio</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                        <div class="dual-btn">
                            <a href="#Footer"><button className="Order">Contact Me</button></a>
                            <a href="#About"><button className="Learn">About Me </button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </header>
        </Fragment>
    )
}

export default Header ;