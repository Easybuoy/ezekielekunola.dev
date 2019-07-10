import React from "react"

import { Footer as StyledFooter } from "../../styles"

const Footer = () => {
  return (
    <StyledFooter>
      <p> Designed by easybuoy 👨🏾‍💻 &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer
