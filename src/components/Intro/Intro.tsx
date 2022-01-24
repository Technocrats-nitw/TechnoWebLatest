import React from "react";
import TechnocratsImg from "./../../assets/technocrats.svg";
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"



export function Intro(){
  return(
    <Container id="home">
        <img src={TechnocratsImg} alt="Ilustração" height={500} className="center"/>
        
    </Container>
  )
}