import React from "react";
import TechnocratsImg from "./../../assets/purple.svg";
import { Container } from "./styles"


export function Intro(){
  return(
    <Container id="home">      
      <img src={TechnocratsImg} alt="Ilustração" className="center" height={500}/>
    </Container>
  )
}