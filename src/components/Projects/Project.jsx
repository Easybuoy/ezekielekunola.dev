import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { Project as StyledProject } from "../../styles"
import { Button} from '../../styles/common'

const Project = ({ slug, title, imageData, description }) => {
  return (
    <StyledProject>
      <div className="project-image">
        <Link to={`/${slug}`}>
          <Image fluid={imageData} alt={title} />
        </Link>
      </div>

      <div className="project-body">
        <h3>{title}</h3>

        <div className="project-technologies">
          <span>React</span>
          <span>Redux</span>
          <span>Styled-components</span>
        </div>

        <Link to={`/${slug}`}>
          <Button>View Project Detail &rarr;</Button>
        </Link>
      </div>
    </StyledProject>
  )
}

export default Project
