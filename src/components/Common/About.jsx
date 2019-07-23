import React from "react"

import ProfileImage from "../../images/profile.png"
import { About as StyledAbout } from "../../styles"

export default function About() {
  return (
    <StyledAbout id="about">
      <div className="about-content">
        <h3>About Me</h3>
        <p>
          Experienced Web Developer with a demonstrated history of working in
          the information technology and services industry. Skilled in NODE,
          REACT, GRAPHQL, MongoDB, PHP, JAVASCRIPT, HTML and Search Engine
          Optimization (SEO). Strong engineering professional graduated from
          Aptech Computer Education.
        </p>
      </div>
      <div className="about-image">
        <img src={ProfileImage} alt="profile" />
      </div>
    </StyledAbout>
  )
}
