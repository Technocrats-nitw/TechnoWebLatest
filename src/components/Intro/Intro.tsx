import React from "react";
import TechnocratsImg from "./../../assets/purple.svg";
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"



export function Intro(){
  return(
    <Container id="home">
      <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
        <img src={TechnocratsImg} alt="Ilustração" width={2000} height={1000}/>
      </ScrollAnimation>
      
      
    </Container>
  )
}