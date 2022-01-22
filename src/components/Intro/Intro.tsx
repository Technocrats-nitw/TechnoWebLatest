import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"

export function Intro(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Technocrats Labs</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Desenvolvedor Full Stack</h3>
        </ScrollAnimation>
        

      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}