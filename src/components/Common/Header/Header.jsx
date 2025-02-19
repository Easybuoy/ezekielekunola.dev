import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import StyledHeader from "./Styles"
import Bounce from "../Bounce"
import ContactDetail from "../Reuseables/ContactDetail/ContactDetail"

export default function Header({ theme }) {
  return (
    <StyledHeader>
      <div
        className="content"
      >
        <div className="header-content">
          <ContactDetail size="5x" theme={theme} />
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
              <span>I am a Senior Frontend Developer</span>
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
