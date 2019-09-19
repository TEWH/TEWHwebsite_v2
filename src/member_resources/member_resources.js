import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import './member_resources.css';

class Resources extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <h2 className="text-left">
                    <p></p>Forms
                </h2>
                <h5><ul>
                    <li><a href="https://drive.google.com/open?id=1Hf3sEo7L2rtDN5EGwCitgm1ntApLq-6XHvBE5avBlMM" target="_blank">Purchase Request Form</a><p></p></li>
                    <li><a href="https://drive.google.com/open?id=1QZrq7o_enuIPU8ejQ-3Q5a91rs_6R4UfrZMRGOXpGjQ" target="_blank">Team Lead Application</a><p></p></li>
                    <li><a href="https://forms.gle/FvPvsJENqPkDL29n9" target="_blank">Team Meeting Documentation</a><p></p></li>
                    <li><a href="https://drive.google.com/open?id=1-Kq4vw4Gi4btyWnJEHWiM-EADmOBZCocJP5a09uSncU" target="_blank">Project Interest Form</a><p></p></li>
                </ul></h5>
                <h2 className="text-left">
                    <p></p>Setup Before Workshops
                </h2>
                <h4><p></p>For Arduino:</h4>
                <h5><ul>
                    <li><a href="https://www.arduino.cc/en/Guide/Introduction" target="_blank">What is Arduino?</a><p></p></li>
                    <li><a href="https://www.arduino.cc/en/Main/Software" target="_blank">Download the Arduino IDE</a><p></p></li>
                </ul></h5>

                <h4><p></p>For Mechanical Design:</h4>
                <h5><ul>
                    <li>Make a student account for <a href="https://www.autodesk.com/products/fusion-360/students-teachers-educators" target="_blank">Fusion 360 </a>and follow the steps to download<p></p></li>
                </ul></h5>

                <h4><p></p>For Machine Learning:</h4>
                <h5><ul>
                    <li>Download the <a href="https://www.anaconda.com/distribution/" target="_blank">Anaconda</a> package for Python/R data science and machine learning<p></p></li>
                </ul></h5>
                </MDBContainer>
            </div>
        );
    }
}


class member_resources extends Component {
    render() {
        return (
            <div>
                <Resources />
            </div>
        )
    }
}
  export default member_resources;

  