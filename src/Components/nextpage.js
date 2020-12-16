import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import './nestpage.css';

function nexty() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>My Personel Bank</Navbar.Brand>
            </Navbar>
            <div className="contains">
                <h1 className='title-of'>Open a new Bank Account</h1>
                <p>This site lets you apply for a new Bank Account. If you are looking to Sign In to an existing account, <a>click here</a></p>
            </div>
            <div className="the-Accor">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                                <h5 className="getting-started">Getting started</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>To process your application we need to confirm your identity and run a few checks.<br></br>
                            Please click Next to start the process.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Button variant="primary" >Next</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className="accor-tile" as={Button} variant="primary" eventKey="1">
                                <h5 className="getting-started">Confirm your Identity</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>We use our identity partner Yoti to confirm your identity. To share your <br></br>details with us please scan the QR code below with the Yoti app. Or for more detailed<br></br> instructions, click on ‘How to create a Yoti account' below and follow the steps.
                            <br></br>
                                <br></br>
                            Scan with Yoti to open your account &nbsp; &emsp; &emsp;<Button variant="primary" >USE YOTI</Button>
                                <br></br>
                                <br></br>
                            Don't have a Yoti? Upload your ID document in your browser.
                            <br></br>
                                <br></br>
                            Upload your document here &nbsp; &emsp; &emsp;<Button variant="primary" >SCAN ID</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default nexty;