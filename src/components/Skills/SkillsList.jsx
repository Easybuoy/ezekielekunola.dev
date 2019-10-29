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
            iconUrl
          }
        }
      }
    }
  `)

  const skills = data.allSkillsJson.edges
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
          <div className="skills-body-content"></div>
          <div className="skills-body-items"></div>
        </div>

        {/* {skills.map(({ node: skill }) => {
        return <Skill key={skill.id} skill={skill} />
      })} */}
      </div>
    </StyledSkillsList>
  )
}

export default SkillsList
