import React from "react";
import './About.css';
import AAA from "../../images/skeleton.png";


const About = () => {
    return(
        <div class="AboutMe" id="About">
            <div className="About-Title">
                <h1>About Me</h1>
            </div>

            <div className="About-container">
                

                <div className="text">
                    <h3>this is <span>me</span></h3>
                    <h2>creative director</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum accusantium minima blanditiis fugit iure. Pariatur numquam cum error, suscipit reprehenderit molestiae hic officiis, veritatis ex aperiam minus optio praesentium fugiat.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum accusantium minima blanditiis fugit iure. Pariatur numquam cum error, suscipit reprehenderit molestiae hic officiis, veritatis ex aperiam minus optio praesentium fugiat.</p>
                </div>
            </div>
        </div>
    )
}

export default About;