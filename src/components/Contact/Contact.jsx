import React from "react"

import { Contact as StyledContact } from "../../styles"

export default function Contact() {
  return (
    <StyledContact>
      <h3>Contact Me</h3>

      <input type="text" placeholder="Your Email" />
      <input type="text" placeholder="ekunolaeasybuoy@gmail.com" />
      <button>Send</button>
    </StyledContact>
  )
}
