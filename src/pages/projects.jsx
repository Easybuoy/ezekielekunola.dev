import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import { Projects as StyledProjects } from "../styles"
import PatternImage from "../images/pattern2.png"
import Navigation from "../components/Common/Navigation"

const Projects = props => (
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

export default Projects
