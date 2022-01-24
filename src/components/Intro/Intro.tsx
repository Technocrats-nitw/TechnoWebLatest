import React from "react";

import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "./styles"


export function Intro(){
  return(
    <Container id="home">      
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Technocrats Labs</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>The Six Sages of Developement</h3>
        </ScrollAnimation>
        
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
      </div>
    </Container>
  )
}