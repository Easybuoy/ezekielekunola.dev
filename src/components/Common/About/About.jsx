import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import StyledAbout from "./Styles"
import PatternImageDark from "../../../images/pattern-bg-dark.svg"

export default function About({ theme }) {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "profile.JPG" }) {
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
            I am a skilled Senior Software Engineer with a proven track record
            in the information technology and services industry. My expertise
            includes Node.js, React, React Native, Redux, GraphQL, TypeScript,
            JavaScript, Vue, and Nextjs. I hold a strong engineering foundation,
            built through my education at Middlesex University, Aptech Computer
            Education, and Lambda School.
          </p>

          <br />
          <br />

          <p>
            Outside of work, you’ll often find me watching TV series on Netflix,
            playing tennis, exploring new places, cheering for Manchester City,
            or enjoying quality time with family and friends.
          </p>
        </div>
        <div className="about-image">
          <img src={data.aboutImage.childImageSharp.fluid.src} alt="profile" />
        </div>
      </div>
    </StyledAbout>
  )
}
