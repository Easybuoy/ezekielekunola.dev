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
          Experienced Web Developer with a demonstrated history of working in
          the information technology and services industry. Skilled in NODE,
          REACT, GRAPHQL, MongoDB, PHP, JAVASCRIPT, HTML and Search Engine
          Optimization (SEO). Strong engineering professional graduated from
          Aptech Computer Education.
        </p>
      </div>
      <div className="about-image">
        <img src={data.aboutImage.childImageSharp.fluid.src} alt="profile" />
      </div>
    </StyledAbout>
  )
}
