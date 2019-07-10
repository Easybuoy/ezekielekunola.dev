import React from "react"
import { Link } from "gatsby"

import "../styles/reset.css"
import "../styles/global.css"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import ProjectsList from "../components/Projects/ProjectsList"

import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import Contact from "../components/Common/Contact"
import SkillsList from "../components/Skills/SkillsList"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <Header />
    <ProjectsList />
    <SkillsList />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
