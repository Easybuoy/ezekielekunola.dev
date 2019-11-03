import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import { Header as StyledHeader } from "../../styles"
import PatternImage from "../../images/pattern.png"
import Bounce from "../Common/Bounce"
import ContactDetail from "../Common/Reuseables/ContactDetail"

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
          <ContactDetail size="5x" />
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
              <span>I am a Software Developer</span>
              <Typist.Backspace count={9} delay={2000} />
              <span>Engineer</span>
            </Typist>
          </div>
        </div>
      </div>
      <Bounce to="about" />
    </StyledHeader>
  )
}
