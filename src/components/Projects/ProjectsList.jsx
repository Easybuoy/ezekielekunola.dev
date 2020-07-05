import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import { ProjectsList as StyledProjectsList } from "./Styles"
import Project from "./Project"
import PatternImageLight from "../../images/pattern2.svg"
import PatternImageDark from "../../images/pattern.svg"

const ProjectsList = ({ theme }) => {
  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }

  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            slug
            title
            url
            githubUrl
            gif
            technologies
            description
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
    <StyledProjectsList id="projects">
      <div
        className="projects-list"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <h3>Projects</h3>
        {projects.slice(0, 8).map(({ node: project }) => (
          <Project key={project.id} project={project} />
        ))}

        <Link to="/projects">View More Projects</Link>
      </div>
    </StyledProjectsList>
  )
}

export default ProjectsList
