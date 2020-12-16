import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Banking-title.css';


function Banking() {
    return (
        <div>
            <div className="Banking-section">
                <h1 className="font-title"><b>Banking</b></h1>
                <h5 className="font-rang">Product in use:</h5>
                <h5 className="font-rang"><Badge variant="secondary">1</Badge> Authentication</h5>
                <h5 className="font-rang"><Badge variant="secondary">2</Badge> Identity Verification</h5>
            </div>
            <br></br>
            <br></br>
            <div className="the-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h2 className="font-title">Try it now</h2></Card.Title>
                        <Card.Text><h5 className="micros">Free and anonymous demo</h5></Card.Text>
                        <Card.Text className="micros">
                            Setup a verified account in our virtual banking website and learn how Yoti works.
                    </Card.Text>
                        <Button variant="primary">Launch Demo</Button>
                        <Card.Text className="micros-two">
                            <br></br>
                            All our demos permanently delete any details shared, including activity logs. We keep no record of your personal details.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Banking;