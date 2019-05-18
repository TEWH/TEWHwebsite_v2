import React, { Component } from 'react';
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
import RealNavBar from '../components/RealNavbar'
import CarouselPage from './Carousel';
import Footer from '../components/Footer'
import './Home.css'

// Icons used
// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from 
// <a href="https://www.flaticon.com/" 			    
// title="Flaticon">www.flaticon.com</a> is licensed by 
// <a href="http://creativecommons.org/licenses/by/3.0/" 			    t
// itle="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

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

class HomePage extends Component {
    render() {
        return (
            <div>
                <RealNavBar />
                <UpcomingEvent />
                <nextEvent />
                <CarouselPage />
                <Description />
                <Footer />
            </div>
        )
    }
}

export default HomePage;

