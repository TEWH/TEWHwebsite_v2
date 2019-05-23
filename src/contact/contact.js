import React, { Component } from 'react';
import { MDBMask, MDBView, MDBRow, MDBContainer } from "mdbreact";
import RealNavBar from '../components/RealNavbar';
import { Card, CardDeck } from 'react-bootstrap';
import './contact.css';


class officers extends Component {
    render() {
        return (
        <div class="container">
            <div class="grid header">
                <RealNavBar />
            </div>
            <div class="grid card1">
                <Card>
                    <Card.Img variant="top" src={require('./img/emily_300x300.jpg')} alt="pres"/>
                    <Card.Body>
                        <Card.Title>Emily Yang</Card.Title>
                        <Card.Text>President</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="grid card2">
                <Card>
                    <Card.Img variant="top" src={require('./img/oliver_300x300.jpg')} alt="VPext"/>
                    <Card.Body>
                        <Card.Title>Oliver Zhao</Card.Title>
                        <Card.Text>VP External</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="grid card3">
                <Card>
                    <Card.Img variant="top" src={require('./img/emily_300x300.jpg')} alt="VPInt"/>
                    <Card.Body>
                        <Card.Title>Jacob Stambaugh</Card.Title>
                        <Card.Text>VP Internal</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="grid card4">
                <Card>
                    <Card.Img variant="top" src={require('./img/emily_300x300.jpg')} alt="Treasurer"/>
                    <Card.Body>
                        <Card.Title>Nikhil Kolluri</Card.Title>
                        <Card.Text>Treasurer</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="grid card5">
                <Card>
                    <Card.Img variant="bottom" src={require('./img/karan_300x300.jpg')} alt="PR"/>
                    <Card.Body>
                        <Card.Title>Karan Shankar</Card.Title>
                        <Card.Text>Public Relations Officer</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>    
            <div class="grid card6">
                <Card>
                    <Card.Img variant="bottom" src={require('./img/abhishek2_300x300.jpg')} alt="fund1"/>
                    <Card.Body>
                        <Card.Title>Abhishek Potdar</Card.Title>
                        <Card.Text>Co-Fundraising Coordinator</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="grid card7">
                <Card>
                    <Card.Img variant="bottom" src={require('./img/emily_300x300.jpg')} alt="fund2"/>
                    <Card.Body>
                        <Card.Title>Annie Anand</Card.Title>
                        <Card.Text>Co-Fundraising Coordinator</Card.Text>
                        <Card.Text>email</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        );
    }
}
class Links extends Component {
    render() {
        return (
            <MDBContainer className="text-left pt-4">
                <MDBView>
                    <div className="row justify-content-md-center dark-gray">
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Join TEWH"
                            ></img>
                            <h4 className="p-1">Emily Yang</h4>
                            <h5 className="p-6">President</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Take a look at our projects"
                            ></img>
                            <h4 className="p-1">Oliver Zhao</h4>
                            <h5 className="p-6">VP External</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Jacob Stambaugh</h4>
                            <h5 className="p-6">VP Internal</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Nikhil Kolluri</h4>
                            <h5 className="p-6">Treasurer</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Karan Shankar</h4>
                            <h5 className="p-6">Public Relations Officer</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Abhishek Potdar</h4>
                            <h5 className="p-6">Fundraising Coordinator</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="col-md-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Anniea Anand</h4>
                            <h5 className="p-6">Fundraising Coordinator</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                    </div>
                </MDBView>
            </MDBContainer>
        );
    }
}
class Contact extends Component {
    render() {
        return (
            <div>
                <Links />
            </div>
        )
    }
}
  export default Contact;

  