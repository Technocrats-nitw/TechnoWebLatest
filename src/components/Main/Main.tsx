import React from "react";
import {Container} from "./styles"
import {Hero} from "../Hero/Hero"

import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";

import BG from "../Bg/bg";
import { Abdullah } from "../About/abdullah";
import { Chaitanya } from "../About/chaitanya";
import { Ashiqa } from "../About/ashiqa";
import { Sufiyan } from "../About/sufiyan";
import { Aaditya } from "../About/aaditya";
import { Anshuman } from "../About/anshuman";

export function Main(){
  return(
    <Container>
      <BG/>
      <Hero></Hero>
      <Sufiyan/>
      <Anshuman/>
      <Ashiqa />
      <Chaitanya />
      <Abdullah />
      <Aaditya />
      
      <Portfolio></Portfolio>
      <Contact></Contact>
    </Container>
  );
}