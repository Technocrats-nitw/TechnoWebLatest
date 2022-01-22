import React from "react";
import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Matlab, Python, Rust, Unity } from "../Icons/Icons";
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'



export function Aaditya(props:any){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>Aaditya Prakash Kattekola</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <p>Me chamo João Túlio, sou técnico em informática com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor Front-End e Back-End</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript. Tenho familiaridade em desenvolver layouts que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada que corre atrás para realizar seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar minha melhor versão.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <Cpp/>
          <Unity/>
          <Matlab/>
          <Rust/>
          <Python/>
      </div>

      <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
          <h3>Social Urls :</h3>
        </ScrollAnimation>

        <div className="social-media hard-skills">
        <a
          href="https://www.linkedin.com/in/aaditya-prakash-74500b195/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Kapi2910"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <img src="https://media-exp1.licdn.com/dms/image/C5103AQEpMaSKg0TwGA/profile-displayphoto-shrink_800_800/0/1587224943645?e=1648080000&v=beta&t=e6T7v-GzoAefwJnlTNXZnEFhup5ogbHNvdxU4VvAQ58" alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
      
    </Container>
  )
}
