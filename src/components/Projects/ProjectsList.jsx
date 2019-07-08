import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./Project"

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
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
    <div>
      {projects.map(({ node: project }) => {
        const { title, description, slug } = project
        const imageData = project.image.childImageSharp.fluid
        return (
          <Project
            key={slug}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </div>
  )
}

export default ProjectsList
