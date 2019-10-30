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
            <div className="skills-body-content-header">
              <i class="fas fa-code fa-3x"></i>
              <h3>Developer</h3>
            </div>

            <div className="skills-body-content-details">
              <h4>
                As someone who loves the art of software development, I have a
                passion for writing robust, clean, and maintainable code.
              </h4>

              <h4>
                This also means I strive to follow best practices and use
                industry-standard tools, including git-flow, Test Driven Development(TDD), Continous Integration (Travis-CI, Coveralls, Codeclimate, Hound), linting (ESLint, Prettier),
                package management (Yarn, NPM, and Pipenv), and modern build
                tools (Webpack, Babel).
              </h4>

              <h4>
                Although I've a wide range of experience, the technology I
                prefer and/or am most familiar with includes{" "}
                <span>
                  Python, Django, PostgreSQL, React.js, JavaScript ES6,
                  Sass/CSS/PostCSS, HTML, Twitter Bootstrap, and Linux.
                </span>
              </h4>
            </div>
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
