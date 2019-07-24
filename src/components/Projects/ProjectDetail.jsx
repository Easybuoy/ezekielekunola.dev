import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

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

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  const { url, title } = project

  const imageData = project.image.childImageSharp.fluid
  return (
    <div>
      <h1>{title}</h1>
      <Image fluid={imageData} alt={title} />

      {/* <p>{description}</p> */}

      <p>
        <Link to={`//${url}`}>View Content &larr;</Link>
      </p>

      <p>
        <Link to="/#projects"> &larr; Back to all projects</Link>
      </p>
    </div>
  )
}

export default ProjectDetail
