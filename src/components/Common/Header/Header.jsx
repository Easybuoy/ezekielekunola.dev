import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import StyledHeader from "./Styles"
import PatternImageLight from "../../../images/pattern2.svg"
import PatternImageDark from "../../../images/pattern.svg"
import Bounce from "../Bounce"
import ContactDetail from "../Reuseables/ContactDetail"

export default function Header({ theme }) {
  let patterImage = PatternImageLight

  if (theme === "dark") {
    patterImage = PatternImageDark
  }
  return (
    <StyledHeader>
      <div
        className="content"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${patterImage})`,
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
