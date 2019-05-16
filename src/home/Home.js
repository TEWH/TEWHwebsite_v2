import React, { Component } from 'react';
import RealNavBar from '../components/RealNavbar'
// import PauseOnHover from './Carousel';
import CarouselPage from './Carousel';

class HomePage extends Component {
    render() {
        return (
            <div>
                <RealNavBar />
                {/* <PauseOnHover /> */}
                <CarouselPage />
            </div>
        )
    }
}

export default HomePage;
