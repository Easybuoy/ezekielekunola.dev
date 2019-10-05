import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import successImage from "../images/mail.svg"
import { Success as StyledSuccess } from "../styles"
import PatternImage from "../images/pattern.png"
import Navigation from "../components/Common/Navigation"

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
          <img src={successImage} alt="" />
        </div>

        <div className="success-content">
          <div className="success-content-detail">
            <h2>Thank you for contacting me!</h2>
            <Link to="/">&larr; Back Home</Link>
          </div>
        </div>
      </div>
    </StyledSuccess>
  </Layout>
)

export default Success
