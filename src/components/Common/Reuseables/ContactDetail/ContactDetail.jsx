import React from "react"

import ContactDetailStyle from "./Styles"

export default function ContactDetail({ size, color, theme }) {
  let mailClassName = `fas fa-envelope fa-${size}`
  let githubClassName = `fab fa-github fa-${size}`
  let linkedInClassName = `fab fa-linkedin fa-${size}`
  let blogClassName = `far fa-newspaper fa-${size}`
  let devClassName = `fab fa-dev fa-${size}`
  let twitterClassName = `fab fa-twitter fa-${size}`

  return (
    <ContactDetailStyle color={color}>
      <a
        className={theme === "dark" ? "dark" : ""}
        href="mailto:ekunolaeasybuoy@gmail.com"
      >
        <i className={mailClassName}></i>
      </a>

      <a href="https://github.com/easybuoy">
        <i className={githubClassName}></i>
      </a>

      <a href="https://www.linkedin.com/in/easybuoy/">
        <i className={linkedInClassName}></i>
      </a>

      <a href="https://www.blog.ezekielekunola.com/">
        <i className={blogClassName}></i>
      </a>

      <a href="https://dev.to/easybuoy">
        <i className={devClassName}></i>
      </a>

      <a href="https://twitter.com/easybuoy">
        <i className={twitterClassName}></i>
      </a>
    </ContactDetailStyle>
  )
}
