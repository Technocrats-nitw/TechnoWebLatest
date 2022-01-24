import React from "react";
import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import { Android, Cpp, Django, Flutter, HTML, Js, Nodejs, Python, REACT, Tf, Torch } from "../Icons/Icons";
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import anshuImg from "../../assets/anshuman.jpeg";

 

export function Anshuman(props:any){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>Anshuman Mishra</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <p>Anshuman Mishra is Electronics Engineering student at NIT Warangal. Although enrolled in an Electronics course he is more interested in bleeding edge softwares , frameworks .</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p> His skill
areas range from App developement to Deep Learning and Web Developement. He is fond of being busy with working on amazing project ideas. Often gets his hands 
dirty , implementing research paper on natural language processing , especially transformers.</p>
        </ScrollAnimation>

        <br/>
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <p>He has amazing project management and ideation skills being one of #The_Original_Six_of_Technocrats.He is well versed with 9 Programming Languages.</p>
        </ScrollAnimation>

        
        <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Expertise:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <REACT/>
          <Tf/>
          <Js/>
          <HTML/>
          <Django/>
          <Nodejs/>
          <Torch/>
          <Flutter/>
          <Android/>  
          <Python/>
        </div>

      <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/iamanshuman/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/anshuisme"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

        <br/>
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <p>He is Expert@Codeforces. His has been handling the post of Additional Secretary at Big Data Analytics and Consulting Cell since 1.5 years, apart from being a student researcher at Nevronas.</p>
        </ScrollAnimation>

     
      </div>


      <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <img src={anshuImg} alt="Anshuman Mishra" />
        </ScrollAnimation>

      </div>
      
    </Container>
  )
}
