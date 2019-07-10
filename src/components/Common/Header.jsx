import React from "react"

import { Header as StyledHeader } from "../../styles"

import Image from "../../images/gatsby-astronaut.png"

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        Yayy
        <div className="contact-details">
          <a href="https://dev.to/easybuoy">
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Ekunola Ezekiel's DEV Profile"
              height="30"
              width="30"
            />
          </a>

          <a href="https://dev.to/easybuoy">
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Ekunola Ezekiel's DEV Profile"
              height="30"
              width="30"
            />
          </a>

          <a href="https://dev.to/easybuoy">
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Ekunola Ezekiel's DEV Profile"
              height="30"
              width="30"
            />
          </a>
        </div>
        <div className="header-text">
          <h1>I am a Software Engineer</h1>

          <div className="header-actions">
          <button>My Work</button>
          <button>Skills</button>
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
