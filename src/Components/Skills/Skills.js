import React from "react";
import './Skills.css'

const Skills = () => {
    return(

        <section className="numbers">
        <div className="Skills-container">
            <h1 className="Title" id="Skills">My Skills</h1>

            <div className="content">

                <div className="html">
                    <div className="sub">
                        <h2>HTML & Css</h2>
                        <h5>100 %</h5>
                    </div>
                </div>
                <div className="html">
                    <div className="sub">
                        <h2>Photoshop</h2>
                        <h5>100 %</h5>
                    </div>
                </div>
                <div className="html">
                    <div className="sub">
                        <h2>JS</h2>
                        <h5>70 %</h5>
                    </div>
                </div>
                <div className="html">
                    <div className="sub">
                        <h2>React.Js</h2>
                        <h5>80 %</h5>
                    </div>
                </div>
                

            </div>
        </div>
        </section>
    )
}

export default Skills ;