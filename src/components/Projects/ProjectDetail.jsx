import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectDetail = ({ title, imageData, description, url }) => {

  return (
    <div>
      <h1>{title}</h1>
      <Image fluid={imageData} alt={title} />

      <p>{description}</p>

      <p>
        <Link to={`//${url}`}>View Content &larr;</Link>
      </p>

      <p>
        <Link to="/"> &larr; Back to all projects</Link>
      </p>
    </div>
  )
}

export default ProjectDetail
