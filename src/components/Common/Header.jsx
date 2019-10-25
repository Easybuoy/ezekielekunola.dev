import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import { Header as StyledHeader } from "../../styles"
import { ContactDetail } from "../../styles/common.js"
import PatternImage from "../../images/pattern.png"
import Bounce from "../Common/Bounce"

export default function Header() {
  return (
    <StyledHeader>
      <div
        className="content"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <div className="header-content">
          <ContactDetail>
            <a href="mailto:ekunolaeasybuoy@gmail.com">
              <i className="fas fa-envelope fa-5x"></i>
            </a>

            <a href="https://github.com/easybuoy">
              <i className="fab fa-github fa-5x"></i>
            </a>

            <a href="https://www.linkedin.com/in/easybuoy/">
              <i className="fab fa-linkedin fa-5x"></i>
            </a>

            <a href="https://www.blog.ezekielekunola.com/">
              <i className="fas fa-newspaper fa-5x"></i>
            </a>

            <a href="https://dev.to/easybuoy">
              <i className="fab fa-dev fa-5x"></i>
            </a>

            <a href="https://twitter.com/easybuoy">
              <i className="fab fa-twitter fa-5x"></i>
            </a>
          </ContactDetail>
          <div className="header-text">
            <h1>
              Hello{" "}
              <span role="img" aria-label="Wave">
                👋🏾
              </span>
              , I'm <span className="name">Ezekiel</span>
            </h1>
            <Typist
              cursor={{
                show: true,
                blink: true,
                element: "  |  ",
                hideWhenDone: false,
              }}
              startDelay={1000}
            >
              <span>I am a Frontend-Developer</span>
              <Typist.Backspace count={18} delay={500} />
              <span>Backend-Developer</span>
              <Typist.Backspace count={17} delay={500} />
              <span>Software Developer</span>
              <Typist.Backspace count={9} delay={500} />
              <span>Engineer</span>
            </Typist>
          </div>
        </div>
      </div>
      <Bounce to="about" />
    </StyledHeader>
  )
}
