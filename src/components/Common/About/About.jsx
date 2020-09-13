import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import StyledAbout from "./Styles"
import PatternImageDark from "../../../images/pattern-bg-dark.svg"

export default function About({ theme }) {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "profile5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledAbout id="about">
      <div
        className="bg"
        style={{
          backgroundImage:
            theme === "light" &&
            `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImageDark})`,
        }}
      >
        <div className="about-content">
          <h3>About Me</h3>
          <p>
            Experienced Software Engineer with a demonstrated history of working
            in the information technology and services industry. Skilled in
            Node, React, React-Native, Redux, GraphQL, PHP, Javascript, MongoDB,
            Postgres. I have a strong engineering background from Aptech
            Computer Education and Lambda School.
          </p>

          <br />
          <br />

          <p>
            When not working on a project or thinking about programming, I'm
            most likely watching TV series on Netflix, playing tennis,
            sight-seeing, watching Manchester City play football, or spending
            time with family and friends.
          </p>
        </div>
        <div className="about-image">
          <img src={data.aboutImage.childImageSharp.fluid.src} alt="profile" />
        </div>
      </div>
    </StyledAbout>
  )
}
