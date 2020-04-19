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
          <Link to="/">&larr; Back Home</Link>
        </div>
      </StyledProjects>
    </Layout>
  )
}

export default Projects
