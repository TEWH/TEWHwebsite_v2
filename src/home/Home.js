import React, { Component } from 'react';
import { MDBMask, MDBView, MDBRow, MDBContainer } from "mdbreact";
import RealNavBar from '../components/RealNavbar'
import CarouselPage from './Carousel';
import Footer from '../components/Footer'
import './Home.css'

class UpcomingEvent extends Component {
    render() {
        return (
            <MDBContainer className="text-left">
                <MDBView>
                    <h6 className="alert alert-dark indigo lighten-4" id="gray-box">Upcoming Calendar Event</h6>
                </MDBView>
            </MDBContainer>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <MDBContainer className="text-left">
                <MDBView>
                    <h6 className="alert indigo lighten-5" id="light-gray-box">
                    Texas Engineering World Health works on medical projects for the 
                    developing world. Each year we work on a different project and 
                    submit it to the Engineering World Health Competition. We work 
                    on researching the prevalent problems that need solutions and we 
                    look into making the idea financially feasible for hospitals in 
                    the developing world. Lastly, we create a prototype that 
                    encompasses engineering skills from all different engineering 
                    fields.
                    <br /><br />
                    In Texas Engineering World Health, members study current 
                    global health issues and utilize their knowledge and skills to 
                    create tangible products to address these problems. The main 
                    focus of the organization is geared towards design project 
                    competitions, specifically the Engineering World Health Design 
                    Competition.
                    </h6>
                </MDBView>
            </MDBContainer>
        );
    }
}

class Links extends Component {
    render() {
        return (
            <MDBContainer className="text-left pt-4">
                <MDBView>
                    <div className="row justify-content-md-center dark-gray">
                        <div class="col-sm-3 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/join.svg')}
                                alt="Join TEWH"
                            ></img>
                            <h4 className="p-4">Join Us.</h4>
                            <p>
                                Want to learn more about medical devices? TEWH is a great
                                way to get started. Come to our meetings or join online.
                            </p>
                        </div>
                        <div class="col-sm-3 offset-md-1 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/cardiogram.svg')}
                                alt="Take a look at our projects"
                            ></img>
                            <h4 className="p-4">Learn About Our Projects.</h4>
                            <p>
                                Take a look at our current project, and some of our previous
                                ones.
                            </p>
                        </div>
                        <div class="col-sm-3 offset-md-1 tile" align="center">
                            <img
                                className="d-block w-50 center"
                                src={require('./img/support.svg')}
                                alt="Show us your support"
                            ></img>
                            <h4 className="p-4">Show Your Support.</h4>
                            <p>
                                If you'd like to support the development of medical devices 
                                for the developing world, we'd love your help!
                            </p>
                        </div>
                    </div>
                </MDBView>
            </MDBContainer>
        );
    }
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <RealNavBar />
                <UpcomingEvent />
                <nextEvent />
                <CarouselPage />
                <Description />
                <Links />
                <Footer />
            </div>
        )
    }
}

export default HomePage;


// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
