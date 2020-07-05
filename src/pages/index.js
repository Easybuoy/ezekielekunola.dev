import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/Theme"
import "../styles/reset.css"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProjectsList from "../components/Projects/ProjectsList"

import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import Contact from "../components/Contact/Contact"
import SkillsList from "../components/Skills/SkillsList"
import BlogsList from "../components/Blogs/BlogsList"
// import HireMe from "../components/Common/HireMe"
import Navigation from "../components/Common/Navigation"
import About from "../components/Common/About"

const IndexPage = () => {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout>
          <SEO title="Home" />
          <Navigation onClick={themeToggler} />
          <Header />
          <About />
          {/* <HireMe /> */}
          <ProjectsList />
          <BlogsList />
          <SkillsList />
          <Contact />
          <Footer />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default IndexPage
