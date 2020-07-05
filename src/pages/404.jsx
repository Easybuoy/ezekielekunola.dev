import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import errorImage from "../images/error.svg"
import { Success as StyledSuccess } from "../styles"
import PatternImage from "../images/pattern.png"
import Navigation from "../components/Common/Navigation/Navigation"

const Success = props => (
  <Layout>
    <Navigation />
    <StyledSuccess>
      <div
        className="success"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <div className="success-image">
          <img src={errorImage} alt="" />
        </div>

        <div className="success-content">
          <div className="success-content-detail">
            <h2>Ooops!!!    Page not found</h2>
            <Link to="/">&larr; Back Home</Link>
          </div>
        </div>
      </div>
    </StyledSuccess>
  </Layout>
)

export default Success
