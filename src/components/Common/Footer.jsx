import React from "react"

import { Footer as StyledFooter } from "../../styles"
import { ContactDetail } from "../../styles/common"
const Footer = () => {
  return (
    <StyledFooter>
      <ContactDetail color="white">
        <a href="mailto:ekunolaeasybuoy@gmail.com">
          <i className="fas fa-envelope fa-3x"></i>
        </a>

        <a href="https://github.com/easybuoy">
          <i className="fab fa-github fa-3x"></i>
        </a>

        <a href="https://www.linkedin.com/in/easybuoy/">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>

        <a href="https://www.blog.ezekielekunola.com/">
          <i className="fas fa-blog fa-3x"></i>
        </a>

        <a href="https://dev.to/easybuoy">
          <i className="fab fa-dev fa-3x"></i>
        </a>

        <a href="https://twitter.com/easybuoy">
          <i className="fab fa-twitter fa-3x"></i>
        </a>
      </ContactDetail>

      <p>
        {" "}
        Designed by easybuoy{" "}
        <span role="img" aria-label="Developer">
          {" "}
          👨🏾‍💻
        </span>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </StyledFooter>
  )
}

export default Footer
