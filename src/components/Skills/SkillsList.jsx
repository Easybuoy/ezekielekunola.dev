import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectsList as StyledProjectsList } from "../../styles"
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
    <StyledProjectsList>
      {skills.map(({ node: skill }) => {
        const { id, description, slug } = skill
        const imageData = project.image.childImageSharp.fluid
        return <Skill key={id} />
      })}
    </StyledProjectsList>
  )
}

export default SkillsList
