import React, { Component } from 'react';
import { MDBMask, MDBView, MDBRow, MDBContainer } from "mdbreact";
import RealNavBar from '../components/RealNavbar';
import { Card, CardDeck } from 'react-bootstrap';
import './contact.css';

class Officers extends Component {
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
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/oliver_300x300.jpg')}
                                alt="Take a look at our projects"
                            ></img>
                            <h4 className="p-1">Oliver Zhao</h4>
                            <h5 className="p-6">VP External</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Jacob Stambaugh</h4>
                            <h5 className="p-6">VP Internal</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Nikhil Kolluri</h4>
                            <h5 className="p-6">Treasurer</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/karan_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Karan Shankar</h4>
                            <h5 className="p-6">Public Relations Officer</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/abhishek2_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Abhishek Potdar</h4>
                            <h5 className="p-6">Fundraising Coordinator</h5>
                            <p>
                                Contact info
                            </p>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/emily_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Annie Anand</h4>
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
                <Officers />
            </div>
        )
    }
}
  export default Contact;

  