import React from "react"

import { Contact as StyledContact } from "../../styles"
import { Input, Button, Form, TextArea } from "../../styles/common"
import PatternImage from "../../images/pattern2.png"
import ContactImage from '../../images/avatar.png'

export default function Contact() {
  return (
    <StyledContact>
      <div
        className="contact"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <h3>Contact Me</h3>

        <div className="contact-form">
          <Form
            // action="https://formspree.io/ekunolaeasybuoy@gmail.com"
            method="POST"
            data-netlify="true"
          >
            <label htmlFor="name">Your Name</label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              required
            />

            <label htmlFor="message">Message</label>
            <TextArea
              id="message"
              placeholder="Your Message"
              name="message"
              required
            />
            <Button>Send</Button>
          </Form>
        </div>

        <div className="contact-form-image">
          <img src={ContactImage} alt="contact" />
        </div>
      </div>
    </StyledContact>
  )
}
