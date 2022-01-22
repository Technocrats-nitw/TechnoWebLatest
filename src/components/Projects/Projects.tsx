import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { Css, Django, Flutter, Js, Python, Tf, Torch, Unity } from "../Icons/Icons";


export function Projects(){
  return(
    <Container id="projects">
      <h2>Project Gallery</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <div className="body">
            <h3>GoVID</h3>
            <p>Hackon With Amazon Project
            </p>

          <div className="hard-skills">
            <Django/>
            <Flutter/>
            <Python/>
            
          </div>
          <footer>  
          <ul className="tech-list">
                <li>Anshuman</li>
                <li>Chaitanya</li>
                <li>Ashiqa</li>
                <li>Sufiyan</li>
              </ul>
          </footer>
          </div>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Voctor 2.0</h3>
              <p>Hackon With Amazon Project
              </p>
            </div>
            <div className="hard-skills">
              <Python/>
              <Tf/>
          </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>TalkAR</h3>
              <p>OIC NIW </p>
            </div>
            <div className="hard-skills">
              
              <Unity/>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Aaditya</li>
                <li>Ashiqa</li>
                <li>Abdullah</li>
                <li>Chaitanya</li>
                <li>Sufiyan</li>
                <li>Anshuman</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Hactoberfest 2021</h3>
              <p>Maintened a Repository Open to Contribution
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Sufiyan</li>
                <li>Anshuman</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>PyDobot M1</h3>
              <p>Drivers for a common robotic arm.</p>
            </div>

            <div className="hard-skills">
              <Python/>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Abdullah</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Connect</h3>
              <p>A Blogging and Social Media Platform</p>
            </div>

            <div className="hard-skills">
              <Django/>
              <Js/>
              <html/>
              <Css/>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Chaitanya Hardikar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>UNiT</h3>
              <p>Reasearch Paper Implementation : Multimodal Multitask Learning with a Unified Transformer</p>
            </div>

            <div className="hard-skills">
              <Torch/>
              <Python/>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Chaitanya Hardikar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}