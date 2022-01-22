import React from "react";
import {Container} from "./styles"
import {Intro} from "../Intro/Intro"
import { Abdullah } from "../About/abdullah";
import { Chaitanya } from "../About/chaitanya";
import { Ashiqa } from "../About/ashiqa";
import { Sufiyan } from "../About/sufiyan";
import { Aaditya } from "../About/aaditya";
import { Anshuman } from "../About/anshuman";
import { Projects } from "../Projects/Projects";
import { Header } from "../Header/Header";


export function Main(){
  return(
    <Container>
      <Header/> 
      <Intro/>
      <Projects/>
      <Sufiyan/>
      <Anshuman/>
      <Ashiqa />
      <Chaitanya />
      <Abdullah />
      <Aaditya />
      
      
    </Container>
  );
}