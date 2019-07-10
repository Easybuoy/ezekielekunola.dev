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
            <i className="fab fa-dev fa-5x"></i>
          </a>

          <a href="https://github.com/easybuoy">
            <i className="fab fa-github fa-5x"></i>
          </a>

          <a href="https://www.linkedin.com/in/easybuoy/">
            <i className="fab fa-linkedin fa-5x"></i>
          </a>

          <a href="https://twitter.com/easybuoy">
            <i className="fab fa-twitter fa-5x"></i>
          </a>

          <a href="https://medium.com/@easybuoy">
            <i className="fab fa-medium fa-5x"></i>
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
