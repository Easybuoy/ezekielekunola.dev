import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectsList as StyledProjectsList } from "../../styles"
import Project from "./Project"

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            slug
            title
            url
            image {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <StyledProjectsList>
      {projects.map(({ node: project }) => {
        const { id, title, description, slug } = project
        const imageData = project.image.childImageSharp.fluid
        return (
          <Project
            key={id}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </StyledProjectsList>
  )
}

export default ProjectsList
