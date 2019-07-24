import React from "react"

import "../styles/reset.css"
import "../styles/global.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/Projects/ProjectsList"

import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import Contact from "../components/Contact/Contact"
import SkillsList from "../components/Skills/SkillsList"
import BlogsList from "../components/Blogs/BlogsList"
import Particle from "../components/Particle/Particle"
import Navigation from "../components/Common/Navigation"
import About from "../components/Common/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <ProjectsList />
    <BlogsList />
    {/* <SkillsList />
    <Contact /> */}
    <Footer />
  </Layout>

)

export default IndexPage
