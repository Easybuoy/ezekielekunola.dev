import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import { Header as StyledHeader } from "../../styles"

import Image from "../../images/gatsby-astronaut.png"

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        Yayy
        <div className="contact-details">
          <a href="https://dev.to/easybuoy">
            <i class="fab fa-dev fa-5x"></i>
          </a>

          <a href="https://github.com/easybuoy">
            <i class="fab fa-github fa-5x"></i>
          </a>

          <a href="https://www.linkedin.com/in/easybuoy/">
            <i class="fab fa-linkedin fa-5x"></i>
          </a>

          <a href="https://twitter.com/easybuoy">
            <i class="fab fa-twitter fa-5x"></i>
          </a>

          <a href="https://medium.com/@easybuoy">
            <i class="fab fa-medium fa-5x"></i>
          </a>
        </div>
        <div className="header-text">
          {/* <h1>I am a Software Engineer</h1> */}
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: "  |  ",
              hideWhenDone: false,
            }}
            startDelay={1000}
          >
            <span>I am a Software Engineer</span>
            <Typist.Backspace count={8} delay={200} />
            <span>Developer</span>
          </Typist>

          {/* <Typist>
            <span> First Sentence</span>
            <Typist.Backspace count={8} delay={200} />
            <span> Phrase </span>
          </Typist> */}

          <div className="header-actions">
            <button>Download Resume</button>
            <button>My Work</button>
          </div>
        </div>
      </div>
      <div className="header-image">
        Image <span role="img">🔥</span>
        <img src={Image} />
      </div>
    </StyledHeader>
  )
}
