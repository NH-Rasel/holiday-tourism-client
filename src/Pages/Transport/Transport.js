import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Transport.css';

const Transport = () => {
    return (
        <div id="transport" className="transport container mt-5">
            <h3 className="text-info fw-bold my-4"><u>Choose your travelling vehicles</u></h3>
            <Row xs={1} md={2} lg={4} className="m-3">
                <Card className="p-3">
                    <Card.Img variant="top" src="https://i.ibb.co/CJ6ccsp/bus.png" />
                    <Link to="/transportDetails"><Button variant="warning">Book Ticket</Button></Link>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src="https://i.ibb.co/kByVc90/air.png" />
                    <Link to="/transportDetails"><Button variant="warning">Book Ticket</Button></Link>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src="https://i.ibb.co/bN89CWW/train.png" />
                    <Link to="/transportDetails"><Button variant="warning">Book Ticket</Button></Link>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src="https://i.ibb.co/JB5mF1P/ship.png" />
                    <Link to="/transportDetails"><Button variant="warning">Book Ticket</Button></Link>
                </Card>
            </Row>
        </div>
    );
};

export default Transport;