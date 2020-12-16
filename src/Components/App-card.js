import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function rock() {
    return (
        <div className="the-card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><h2 className="font-title">Part of this demo requires the Yoti App</h2></Card.Title>
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
    );
}

export default rock;