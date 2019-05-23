import React, { Component } from 'react';
import { MDBMask, MDBView, MDBRow, MDBContainer } from "mdbreact";
import './supporters.css'

class SupportUs extends Component {
    render() {
      return (
            <MDBContainer className="text-left">
                <MDBView>
                    <h6 className="alert alert-dark indigo lighten-4" id="gray-box">
                        If you'd like to provide us support, please contact our&nbsp;
                        <a href="/contact/#">Fundraising Coordinators</a>&nbsp;
                        or view our&nbsp;
                        <a href="#">corporate packet</a>&nbsp;
                        for more details   
                    </h6>
                </MDBView>
            </MDBContainer>
        );
    }
}



class Supporters extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <SupportUs />
                <h1 className="text-center alert">
                    Thank you to our generous supporters!
                </h1>

                <h3 className="supporter-name">
                    Calvin Lau
                </h3>

                <h3 className="supporter-name">
                    Lily Chen
                </h3>

                <h3 className="supporter-name">
                    Sheryl Sabillo-Wiser
                </h3>

                <h3 className="supporter-name">
                    Litao Wang
                </h3>

                </MDBContainer>
            </div>
        );
    }
}

export default Supporters;