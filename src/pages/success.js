import React from "react"

import Layout from "../components/Layout"
import successImage from "../images/success.svg"
import { Success as StyledSuccess } from "../styles"

const Success = props => (
  <Layout>
    <StyledSuccess>
      <div className="inner">
        <header className="major">
          <h1>Success/Thank You Page</h1>
        </header>
        <span className="image main">
          <img src={successImage} alt="" />
        </span>
        <p>Thank you for contacting us!</p>
      </div>
    </StyledSuccess>
  </Layout>
)

export default Success
