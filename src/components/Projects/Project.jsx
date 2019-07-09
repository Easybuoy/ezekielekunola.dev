import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import {Project as StyledProject } from '../../styles'

const Project = ({ slug, title, imageData, description }) => {
  return (
    <StyledProject>
      <Link to={`/${slug}`}>
        <Image fluid={imageData} alt={title} />
      </Link>

      <div className="project-body">
      <h2>
        <Link to={`/${slug}`}>{title}</Link>
      </h2>

      <p>
        <Link to={`/${slug}`}>View Project Detail &rarr;</Link>
      </p>
      </div>
   
    </StyledProject>
  )
}

export default Project
