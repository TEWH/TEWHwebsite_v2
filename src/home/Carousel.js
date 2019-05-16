import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;

// import React, { Component } from 'react';
// import Slider from "react-slick";
// import Carousel from 'react-bootstrap/Carousel'
// import './Home.css'
// import p1 from './img/p1.jpg'
// import p2 from './img/p2.png'
// import p3 from './img/p3.jpg'

// const carouselWidth = {
//   width: '60%',
//   // margin: 0 auto,
// }

// export default class ControlledCarousel extends React.Component {
// constructor(props, context) {
//   super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null,
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction,
//     });
//   }

//   render() {
//     const { index, direction } = this.state;

//     return (
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}
//       >
//         <Carousel.Item>
//           <img
//             className="d-block w-75 d-flex justify-content-center"
//             src={p1}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

// // export default class PauseOnHover extends Component {
// //   render() {
// //     var settings = {
// //       dots: true,
// //       infinite: true,
// //       slidesToShow: 1,
// //       slidesToScroll: 1,
// //       autoplay: true,
// //       autoplaySpeed: 2000,
// //       pauseOnHover: true,
// //       className: carouselWidth,
// //       centerPadding: '100px',
// //     };
// //     return (
// //       <div className={carouselWidth}>
// //         <h2>Pause On Hover</h2>
// //         <Slider {...settings}>
// //           <div>
// //             <h3>1</h3>
// //           </div>
// //           <div>
// //             <h3>2</h3>
// //           </div>
// //           <div>
// //             <h3>3</h3>
// //           </div>
// //           <div>
// //             <h3>4</h3>
// //           </div>
// //           <div>
// //             <h3>5</h3>
// //           </div>
// //           <div>
// //             <h3>6</h3>
// //           </div>
// //         </Slider>
// //       </div>
// //     );
// //   }
// // }