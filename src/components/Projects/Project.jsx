import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { Project as StyledProject } from "../../styles"
import { Button } from "../../styles/common"

const Project = ({ project }) => {
  const { title, slug, technologies } = project
  const imageData = project.image.childImageSharp.fluid

  return (
    <StyledProject>
      <div className="project-image">
        <Link to={`/${slug}`}>
          <Image fluid={imageData} alt={title} style={{height: '200px'}} />
        </Link>
      </div>

      <div className="project-body">
        <h3>{title}</h3>

        {/* <div className="project-technologies">
          {technologies.map(technology => (
            <span key={technology}>{technology}</span>
          ))}
        </div> */}

        {/* <Link to={`/${slug}`}>
          <Button>View Project Detail &rarr;</Button>
        </Link> */}
      </div>
    </StyledProject>
  )
}

export default Project
