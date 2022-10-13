import React , {Component , useState} from "react";
import './Comments.css';
import Carousel from 'react-bootstrap/Carousel';
import first from '../../images/comment2_files/1.jpg'
import second from '../../images/comment2_files/2.jpg'


function UncontrolledExample() {
        return (
            <section className="sliderx">
                <div className="row">
                <div className="comments">
                    <h1>Comments</h1>
                </div>
                </div>
            <div className="comment-container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <Carousel>
                        <Carousel.Item>
                            <img src={first} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                            <Carousel.Item>
                            <img src={first} />

                        <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>

                        </Carousel.Item>
                            <Carousel.Item>
                            <img src={second} />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
            
            </section>
        );
        }

export default UncontrolledExample;