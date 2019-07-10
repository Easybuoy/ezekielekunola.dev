import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      {skills.map(({ node: skill }) => { 
        return <Skill key={skill.id} skill={skill} />
      })}
    </StyledSkillsList>
  )
}

export default SkillsList
