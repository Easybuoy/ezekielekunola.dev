import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PatternImage from "../../images/pattern.png"
import { SkillsList as StyledSkillsList } from "../../styles"
import Skill from "./Skill"

const SkillsList = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            title
            icon
            skillset
          }
        }
      }
    }
  `)

  const skills = data.allSkillsJson.edges
  console.log(skills)
  return (
    <StyledSkillsList>
      <div
        className="skills"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <div className="skills-header">
          <h3>Skills</h3>
        </div>

        <div className="skills-body">
          <div className="skills-body-content">
            <p>
              As someone who loves the art of software development, I have a
              passion for writing robust, clean, and maintainable code. This
              also means I strive to follow best practices and use
              industry-standard tools, including git-flow, TDD, linting, package
              management (Yarn, NPM, and Pipenv), and modern build tools
              (Webpack and Parcel). Although I've a wide range of experience,
              the technology I prefer and/or am most familiar with includes
              Python, Django, PostgreSQL, React.js, JavaScript ES6,
              Sass/CSS/PostCSS, HTML, Twitter Bootstrap, and Linux.
            </p>
          </div>
          <div className="skills-body-items">
            {skills.map(({ node: skill }) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </StyledSkillsList>
  )
}

export default SkillsList
