import React from "react";
import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import youtubeIcon from '../../assets/youtube.svg'
import twitterIcon from '../../assets/twitter.png'

export function Footer() {
  return (
    <Container className="footer" id="foot">
      <a href="/" className="logo">
        <span>Technocrats Labs</span>
        <h6>technocrats.nitw@gmail.com</h6>
      </a>
      <div>
        <p>
          Made with <span>❤️</span> in <img src={reactIcon} alt="React" /> x <img src={githubIcon} alt="React" /> pages
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/company/technocrats-lab"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Technocrats-nitw"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/labs_technocrat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a
          href="https://www.youtube.com/channel/UC7XJqHdyyUgQcIYkCsP8APg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </Container>
  )
}
