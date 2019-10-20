import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Contact as StyledContact } from "../../styles"
import { Input, Button, Form, TextArea } from "../../styles/common"
import PatternImage from "../../images/pattern2.png"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

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
            action="/success"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

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
            <Button type="submit">Send</Button>
          </Form>
        </div>

        <div className="contact-form-image">
          <Image fluid={data.imageOne.childImageSharp.fluid} alt="contact" />
        </div>
      </div>
    </StyledContact>
  )
}
