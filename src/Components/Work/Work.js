import React from "react";
import './Work.css';
import portfolio from '../../images/portfolio.png'
import market from '../../images/website.jpg'
import engineer from '../../images/engineer.jpg'



const Work = () => {
    return(
        <div className="Work" id="Work">
            <div className="Work-container">
                <div className="Work-title">
                    <h1>My Work</h1>
                </div>

                <div class="Profile-content">
                    <div class="Portfolio-card">
                        
                        <div class="portfolio-info">
                            <img src={portfolio} title='img'></img>
                            <h3>Portfolio</h3>
                    
                        </div>
                    </div>
                    <div class="market-card">
                        
                        <div class="market-info">
                            <img src={market} title='img'></img>
                            <h3>Out Doors</h3>
                    
                        </div>
                    </div>
                    <div class="engineer-card">
                        
                        <div class="engineer-info">
                            <img src={engineer} title='img'></img>
                            <h3>Store</h3>
                    
                        </div>
                    </div>
                </div>  

            </div>
        </div>
    )
}

export default Work ;
