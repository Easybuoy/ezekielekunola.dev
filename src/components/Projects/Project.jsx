import React from "react"
import { Link } from "gatsby"

import { Project as StyledProject } from "../../styles"

const Project = ({ project }) => {
  const { title, slug } = project
  const imageData = project.image.childImageSharp.fluid

  return (
    <StyledProject>
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${imageData.src})`,
        }}
      >
        <Link to={`/${slug}`}>
          <div className="project-content"></div>
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
