import React from "react"
import { Link } from "gatsby"

import { Project as StyledProject } from "./Styles"

const Project = ({ project }) => {
  const { title, slug } = project
  const imageData = project.image.childImageSharp.fluid

  return (
    <StyledProject>
      <Link to={`/${slug}`}>
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${imageData.src})`,
          }}
        >
          {/* <Link to={`/${slug}`}> */}
          <div className="project-content"></div>
          {/* </Link> */}
        </div>

        <div className="project-body">
          <h3>{title}</h3>
        </div>
      </Link>
    </StyledProject>
  )
}

export default Project
