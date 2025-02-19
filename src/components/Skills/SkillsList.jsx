import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SkillsList as StyledSkillsList } from "./Styles"
import Skill from "./Skill"

const SkillsList = ({ theme }) => {
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

  return (
    <StyledSkillsList>
      <div className="skills">
        <div className="skills-header">
          <h3>Skills</h3>
        </div>

        <div className="skills-body">
          <div className="skills-body-content">
            <div className="skills-body-content-header">
              <i className="fas fa-code fa-3x"></i>
              <h3>Developer</h3>
            </div>

            <div className="skills-body-content-details">
              <h4>
                I am a Senior Frontend Web Application developer with a passion for
                web technologies. I write robust, clean, re-usable and
                maintainable code.
              </h4>

              <h4>
                This also means I strive to follow best practices and use
                industry-standard tools, including git-flow, Test Driven
                Development(<span>Jest, React-testing-library, Cypress, Mocha, Chai</span>), Continous
                Integration (
                <span>Travis-CI, Coveralls, Codeclimate, Hound</span>), linting
                (<span>ESLint, Prettier</span>), package management (
                <span>Yarn and NPM</span>), and modern build tools (
                <span>Webpack, Babel</span>).
              </h4>

              <h4>
                Although I've a wide range of experience, the technology I
                prefer and/or am most familiar with includes{" "}
                <span>
                  React, Redux, Vue, Vuex, Node, JavaScript ES6,
                  Sass/CSS/PostCSS, HTML.
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
