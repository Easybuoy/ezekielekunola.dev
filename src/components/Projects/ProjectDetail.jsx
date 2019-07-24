import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import { ProjectDetail as StyledProjectDetail } from "../../styles"
import PatternImage from "../../images/pattern.png"

export const query = graphql`
  query($slug: String) {
    projectsJson(slug: { eq: $slug }) {
      title
      url
      githubUrl
      technologies
      description
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
  console.log(project)
  const { url, title, technologies, githubUrl, description } = project

  const imageData = project.image.childImageSharp.fluid
  return (
    <StyledProjectDetail>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Alegreya+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Concert+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div
        className="project-detail"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <div className="project-image">
          <Image fluid={imageData} alt={title} />
        </div>

        <div className="project-content">
          <h2>{title}</h2>

          <p>{description}</p>

          <a href="https://github.com/easybuoy">
            <i className="fab fa-github fa-4x"></i>
          </a>

          <a href="https://github.com/easybuoy">
            <i className="fas fa-globe fa-4x"></i>
          </a>

          <div className="project-technologies">
            {technologies.map(technology => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <p>
            <a href={`${url}`} target="_blank" rel="noopener noreferrer">
              View Content &rarr;
            </a>
          </p>

          <p>
            <Link to="/#projects"> &larr; Back to all projects</Link>
          </p>
        </div>
      </div>
    </StyledProjectDetail>
  )
}

export default ProjectDetail
