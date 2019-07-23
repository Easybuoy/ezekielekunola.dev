import React from "react"

import { Contact as StyledContact } from "../../styles"
import { Input, Button, Form, TextArea } from "../../styles/common"

export default function Contact() {
  return (
    <StyledContact>
      <h3>Contact Me</h3>
      {/* action="https://formspree.io/ekunolaeasybuoy@gmail.com" method="POST" */}
      <Form action="https://formspree.io/ekunolaeasybuoy@gmail.com" method="POST">
        <label htmlFor="name">Your Name</label>
        <Input type="text" id="name" placeholder="Your Name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <Input type="email" id="email" placeholder="Your Email" name="email" required />

        <label htmlFor="message">Message</label>
        <TextArea id="message" placeholder="Your message" name="message" required/>
        <Button>Send</Button>
      </Form>
    </StyledContact>
  )
}
