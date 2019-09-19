import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";

import './Projects.css';


class ProjectInfo extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <h2 className="text-left">
                    <p></p>Current Projects (2019-2020)
                </h2>
                <p></p>

                <h4>Ultrasonic Vision for the Blind</h4>
                <p></p>
                <img src={require("./img/Ultrasonic.JPG")} alt="Ultrasonic" class="center"></img>
                <p></p>
                <h5 align="center">Ultrasonic sensors at different body parts send vibrations when obstacles are detected</h5>
                
                <br></br>
                <h4>Solar Autoclave</h4>
                <p></p>
                <img src={require("./img/Autoclave.JPG")} alt="Autoclave" class="center"></img>
                <p></p>
                <h5 align="center">Using collapsible mechanism to capture solar energy to power autoclave</h5>

                <br></br>
                <h4>Diagnosing Malaria</h4>
                <p></p>
                <img src={require("./img/Malaria.JPG")} alt="Malaria" class="center"></img>
                <p></p>
                <h5 align="center">Using machine learning to predict malaria based on image data from blood smears</h5>

                <br></br>
                <h2 className="text-left">
                    <p></p>Child Vitals Monitor (2018-2019)
                </h2>
                <p></p>
                <img src={require("./img/Vitals.JPG")} alt="VitalsMonitor" class="center"></img>
                <p></p>
                <h5 align="center">A vitals monitor designed to be used for children. Detects heart rate, blood pressure, oxygen saturation, and body temperature. Data is sent to an Android app via Bluetooth.</h5>

                <h2 className="text-left">
                    <p></p>Bili Light Incubator (2017-2018)
                </h2>
                <p></p>
                <img src={require("./img/Bili.JPG")} alt="Bili" class="center"></img>
                <p></p>
                <h5 align="center">An incubator for newborns with jaundice. Blue bili lights in the incubator break down bilirubin in the blood to treat neonatal jaundice. The incubator is fully functional and supplies a constant body temperature and airflow to the newborn.</h5>

        
                <h2 className="text-left">
                    <p></p>FreePulse Patient Monitor (2014-2015)
                </h2>
                <p></p>
                <img src={require("./img/FreePulse.jpg")} alt="FreePulse" class="center"></img>
                <p></p>
                <h5 align="center">FreePulse is a low-cost patient monitor that provides basic monitoring for heart rate, electrocardiogram signals, and oxygen saturation. This project was the winner of the Engineering World Health design competition and was the third place winner in the NIH DEBUT competition.</h5>
                </MDBContainer>
            </div>
        );
    }
}


class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectInfo />
            </div>
        )
    }
}
  export default Projects;

  