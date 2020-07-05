import React from "react"
import ToggleContainer from "./Styles"

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <ToggleContainer onClick={toggleTheme}>
        <i className="far fa-5x fa-sun"></i>
        <i className="far fa-5x fa-moon"></i>
      </ToggleContainer>
    </>
  )
}

export default Toggle
