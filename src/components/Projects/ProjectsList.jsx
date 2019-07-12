import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectsList as StyledProjectsList } from "../../styles"
import Project from "./Project"

import Projects from "../../images/projects.svg"

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
            githubUrl
            gif
            technologies
            description
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
    <StyledProjectsList
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Projects})`,
      }}
    >
      <h3>Projects</h3>
      {projects.map(({ node: project }) => {
        return <Project key={project.id} project={project} />
      })}
    </StyledProjectsList>
  )
}

export default ProjectsList
