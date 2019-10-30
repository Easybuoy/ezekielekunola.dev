import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Alegreya+Sans&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Jaldi&display=swap" rel="stylesheet"></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Concert+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
