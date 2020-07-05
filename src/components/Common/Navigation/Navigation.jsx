import React from "react"
import { Link } from "gatsby"

import StyledNavigation from "./Styles"
import logo from "../../../images/logo.svg"

const Navigation = ({ onClick }) => {
  return (
    <StyledNavigation>
      <Link to="/">
        <img src={logo} alt="logo" onClick={onClick} />
      </Link>
    </StyledNavigation>
  )
}

export default Navigation
