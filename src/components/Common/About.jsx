import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { About as StyledAbout } from "../../styles"

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "profile2.jpg" }) {
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
      <div className="about-content">
        <h3>About Me</h3>
        <p>
          Experienced Software Engineer with a demonstrated history of working
          in the information technology and services industry. Skilled in Node,
          React, Redux, GraphQL, PHP, Javascript, Python, MongoDB, Postgres. I
          have a strong engineering background from Aptech Computer Education
          and Lambda School.
        </p>

        <br />
        <br />

        <p>
          When not working on a project or thinking about programming, I'm most
          likely watching TV series on Netflix, playing tennis, sight-seeing,
          watching Manchester City play football, or spending time with family
          and friends.
        </p>
      </div>
      <div className="about-image">
        <img src={data.aboutImage.childImageSharp.fluid.src} alt="profile" />
      </div>
    </StyledAbout>
  )
}
