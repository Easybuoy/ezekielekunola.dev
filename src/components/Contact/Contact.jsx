import React from "react"

import { Contact as StyledContact } from "../../styles"
import { Input, Button, Form, TextArea } from "../../styles/common"

export default function Contact() {
  return (
    <StyledContact>
      <h3>Contact Me</h3>
      {/* action="https://formspree.io/ekunolaeasybuoy@gmail.com" method="POST" */}
      <Form >
        <label for="name">Your Name</label>
        <Input type="text" id="name" placeholder="Your Name" required />

        <label for="email">Your Email</label>
        <Input type="email" id="email" placeholder="Your Email" required />
        {/* 
        <label for="to">To</label>
        <Input type="text" id="to" readOnly value="Ezekiel Ekunola" disabled /> */}

        <label for="message">Message</label>
        <TextArea id="message" placeholder="Your message" required/>
        <Button>Send</Button>
      </Form>
    </StyledContact>
  )
}
