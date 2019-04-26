import React, { Component } from 'react';
import RealNavBar from '../components/RealNavbar'
import ControlledCarousel from './Carousel'

class HomePage extends Component {
    render() {
        return (
            <div>
                <RealNavBar />
                <ControlledCarousel />
            </div>
        )
    }
}

export default HomePage;
