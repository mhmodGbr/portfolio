import React from "react";
import './Questions.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


    function GridExample() {
        return (
            <div className="Questions" >
                <div className="Questions-title">
                    <h3>Frequently Asked Questions</h3>
                </div>
            
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                    <Card.Body>
                        <Card.Title>Web Developer</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>

            </div>
            );
        }


export default GridExample;