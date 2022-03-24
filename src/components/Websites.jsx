import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css';
import "../Pictures/profilepic1.jpg";

function Websites() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };


  return (
    // <div className="portfolio-wrapper">
      
    <div className="Websites-wrapper">
      {/* <img className="portfolio-cover" src="https://i.ibb.co/pLLrYcg/computer-device-on-work-desk-top-view.jpg" /> */}
      <br />
      <Carousel className="carousel-wrapper" showDots={true} responsive={responsive} customRightArrow={<CustomRightArrow />} centerMode={true} focusOnSelect={true} >

      <div>
          <h5 className="carousel-item-title font-type" 
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Grocery List</h5>
          <a href="https://grocery-list-web.netlify.app/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/P6WvBX9/Screen-Shot-2022-03-24-at-2-29-48-PM.png"/>
          </a>
          <p>React, Redux, Typescript, Node JS, MongoDB, CSS</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type" 
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Portfolio Website</h5>
          <a href="https://emilykchow.com" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/sPxFKpb/Screen-Shot-2021-12-29-at-7-09-52-PM.png"/>
          </a>
          <p>PHP, WordPress, CSS, HTML</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Concert Landing Page</h5>
          <a href="https://concert-landing-page.herokuapp.com/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/hXhYYgP/Screen-Shot-2022-01-17-at-5-31-17-PM.png"/>
          </a>
          <p>React, CSS, HTML</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Quiz App</h5>
          <a href="https://emilykchow.github.io/react-quiz/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/gFHjjdh/Screen-Shot-2022-01-01-at-5-39-55-PM.png"/>
          </a>
          <p>React, CSS, HTML</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Black Jack Game</h5>
          <a href="https://emilykchow.github.io/blackjack/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/JnKX4Sj/Screen-Shot-2022-01-01-at-5-46-08-PM.png"/>
          </a>
          <p>Javascript, CSS, HTML</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">News Articles App</h5>
          <a href="https://angry-lichterman-6a55f2.netlify.app/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/5hgY1Z4/Screen-Shot-2022-01-01-at-5-48-06-PM.png"/>
          </a>
          <p>React, CSS, HTML</p>
        </div>

        <div>
          <h5 className="carousel-item-title font-type"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000">Finance Splitting Web</h5>
          <a href="https://iou2.herokuapp.com/about/" target="_blank">
          <img className="portfolio-item" src="https://i.ibb.co/rmpkzQV/Screen-Shot-2022-01-01-at-5-51-50-PM.png"/>
          </a>
          <p>Python, CSS, HTML</p>
        </div>

      </Carousel>


      {/* </div> */}
</div>


  );
}

export default Websites;
