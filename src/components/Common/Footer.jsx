import React from "react"

import ContactDetail from "./Reuseables/ContactDetail/ContactDetail"
import { Footer as StyledFooter } from "../../styles"

const Footer = () => {
  return (
    <StyledFooter>
      <ContactDetail size="3x" color="white" />
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
