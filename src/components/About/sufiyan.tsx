import React from "react";
import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Css, Django, HTML, Js, Mongo, Mysql, Nodejs, Python, REACT, Typescript } from "../Icons/Icons";
import SufiyanImg from "../../assets/sufiyan.jpeg";
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'


export function Sufiyan(){
  return(
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={SufiyanImg} alt="Sufiyan Ansari" />
        </ScrollAnimation>

      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Mohd. Sufiyan Ansari</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            This is Mohd Sufiyan Ansari, currently a pre-final year student at National Institute of Technology, Warangal.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>
            Proficient at Backend Development using Django / ExpressJS+NodeJS, he has built numerous websites and won hackathons.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>
            Presently a Senior Developer in WSDC NITW and Joint Secretary at CSE Association, NITW.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Tech-stacks :</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <Cpp/>
          <Django/>
          <REACT/>
          <Js/>
          <HTML/>
          <Css/>
          <Nodejs/>
          <Mysql/>
          <Mongo/>
          <Typescript/>
          <Python/>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/sufiyan-ansari-nitw/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/suffisme"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

      </div>
      
    </Container>
  )
}
