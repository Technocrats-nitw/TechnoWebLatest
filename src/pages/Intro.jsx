import React from "react";

import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "../components/styles/intro"
import Testimonial from "../components/testimonial";

function Intro(){
  return(
    <Container id="home">      
      <div className="hero-text">

      <br/>
        <br/>
        <br/>

        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000} animateOnce={true}>
          <h1>Technocrats Labs</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} animateOnce={true}>
          <h3>We leverage ultimate technologies to transcend customer experience</h3>
        </ScrollAnimation>
        <br/>
        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} animateOnce={true}>
          <h2>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqulorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu </h2>
        </ScrollAnimation>
        
        <br/>
        <br/>
        <br/>

        <br/>

        <Testimonial/>

      </div>
    </Container>
  )
}

export default Intro;