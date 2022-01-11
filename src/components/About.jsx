import React from "react";
import '../App.css';
import { Card } from 'react-bootstrap';

function About({aos}) {
  return (
    <div className="About-wrapper bg-style" id="section2" >

      <h1 className="about-title font-type"
          >The Odyssey of Emily Chow</h1>
      <p data-aos="fade-down-right"
        data-aos-delay="50"
        data-aos-duration="1000">
          Who: A full-stack developer experience in building web applications. A life long learner.</p>
      <p data-aos="fade-down-left"
          data-aos-delay="50"
          data-aos-duration="1000">Passions: I am actively learning coding, cooking, knitting and other new diverse challenges.</p>
      <p data-aos="fade-down-right"
        data-aos-delay="50"
        data-aos-duration="1000">Education: Wilfrid Laurier University / General Assembly</p>



      {/* <div className="about-boxes">
        <Card className="card-item font-type">
          <Card.Body>
            <Card.Title><h3><strong>Work</strong></h3></Card.Title>
            <Card.Text >
              <h5>I am a full-stack developer located in Canada. I am a reliable and detailed-oriented individual looking to work as a web developer, offering expertise in Javascript, HTML, CSS and core web design.  I have always been someone who has both a creative and logical side. I first went to university for Business Technology Management, but later on I discovered my passion for creating websites and applications. I deicided to enroll into General Assembly bootcamp,  switch careers from business to coding. </h5>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-item font-type">
          <Card.Body>
            <Card.Title><h3><strong>Hobbies</strong></h3></Card.Title>
            <Card.Text>
              <h5>Outside of work, I like to learn new things such as knitting, listening to audiobooks and cooking on a daily basis. I like to play video games, socialize with friends, hiking, and lots of travelling. Right before the pandemic, I went to Japan with a friend, and also did a couple solo trips to Chicago and New York.</h5>
            </Card.Text>
          </Card.Body>
        </Card>

      </div> */}

      </div>
      
    
  );
}

export default About;
