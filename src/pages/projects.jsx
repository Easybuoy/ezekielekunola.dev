import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import { Projects as StyledProjects } from "../styles"
import PatternImage from "../images/pattern2.png"
import Navigation from "../components/Common/Navigation"

const Projects = props => {
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
  console.log(projects)
  return (
    <Layout>
      <Navigation />
      <StyledProjects>
        <div
          className="projects"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
          }}
        >
          <div className="projects-list">
            {projects.map(({ node: project }) => (
              <div className="project">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map(technology => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-4x"></i>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-4x"></i>
                  </a>

                  {project.youtubeUrl ? (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube fa-4x"></i>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <Link className="home" to="/#projects">&larr; Back Home</Link>
        </div>
      </StyledProjects>
    </Layout>
  )
}

export default Projects
