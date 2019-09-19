import React, { Component } from 'react';
import { MDBView, MDBContainer } from "mdbreact";
import './contact.css';

class ContactInfo extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <h2 className="text-left">
                    <p></p>Join Us!
                </h2>
                <p>If you're interested in joining TEWH, come out to our general meetings! 
                    You can also shoot us an email at austin.tewh@gmail.com 
                </p>
                <h2 className="text-left">
                    <p></p>Social Media
                </h2>
                <h6>
                    Follow us on our&nbsp;
                    <a href="https://www.facebook.com/groups/TexasEWH/" target="_blank">Facebook</a>, 
                    <a href="http://www.linkedin.com/in/tewh" target="_blank"> LinkedIn</a>, or 
                    <a href="https://twitter.com/TexasEWH" target="_blank"> Twitter</a> pages 
                    for event notifications and updates!
                </h6>
                <p><br></br></p>
                <h2 className="text-left">
                    <p></p>Officers
                </h2>
                </MDBContainer>
            </div>
        );
    }
}

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
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/oliver_300x300.jpg')}
                                alt="Take a look at our projects"
                            ></img>
                            <h4 className="p-1">Oliver Zhao</h4>
                            <h5 className="p-6">VP External</h5>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/jacob_300x300.JPG')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Jacob Stambaugh</h4>
                            <h5 className="p-6">VP Internal</h5>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/nikhil_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Nikhil Kolluri</h4>
                            <h5 className="p-6">Treasurer</h5>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/karan_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Karan Shankar</h4>
                            <h5 className="p-6">Public Relations Officer</h5>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/abhishek2_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Abhishek Potdar</h4>
                            <h5 className="p-6">Fundraising Coordinator</h5>
                        </div>
                        <div class="pt-4 col-md-3" align="center">
                            <img
                                className="d-block w-75 center"
                                src={require('./img/annie_300x300.jpg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-1">Annie Anand</h4>
                            <h5 className="p-6">Fundraising Coordinator</h5>
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
                <ContactInfo />
                <Officers />
            </div>
        )
    }
}
  export default Contact;

  