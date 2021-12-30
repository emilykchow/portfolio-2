import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css';
import webData from "./webData";
import "../Pictures/profilepic1.jpg";

function Websites() {
console.log(webData.id);

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
    <div className="Websites-wrapper">
      <h4 className="font-type page-title">My Work</h4>
      <br />
      <div className="font-type">
      {/* <h1>Websites/Web Apps</h1> */}
      </div>
      <Carousel className="carousel-wrapper" responsive={responsive} customRightArrow={<CustomRightArrow />} centerMode={true} focusOnSelect={true} >

        <div>
          <h5 className="carousel-item-title font-type">PHP, WordPress, CSS, HTML</h5>
          <a href="www.emilykchow.com" target="_blank">
          <img src="https://i.ibb.co/sPxFKpb/Screen-Shot-2021-12-29-at-7-09-52-PM.png"/>
          </a>

        </div>


        <div>
          item 2
          <img src="https://static.wikia.nocookie.net/runescape2/images/5/56/Frog_%28NPC%29.png/revision/latest?cb=20160531202106" />
        </div>


          
        <div>item 3
        <img src="../Pictures/profilepic1.jpg"
          alt="Profile Picture"
        />
        </div>

        <div>item 4
          <img src="https://ibb.co/c1xZLTL" />
          </div>

        <div>item 5
        <img src="https://ibb.co/c1xZLTL" />
        </div>

      </Carousel>


    

</div>


  );
}

export default Websites;



// { webData.Map(data, key) => (
//   <div key={data.id}>
//     <img src={data.image}/>
//     <h3>{data.technologyUsed}</h3>
//     <p>{data.content}</p>

//   <div/>
//   )
// }