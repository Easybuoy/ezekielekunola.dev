import React from "react"
import { graphql } from "gatsby"

import ProjectDetail from "../components/Projects/ProjectDetail"

export const query = graphql`
  query($slug: String) {
    projectsJson(slug: { eq: $slug }) {
      title
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const { url, title } = project
  console.log(project, "----")
  const imageData = project.image.childImageSharp.fluid
  return (
    <div>
      <ProjectDetail title={title} imageData={imageData} url={url} />
    </div>
  )
}

export default ProjectTemplate
