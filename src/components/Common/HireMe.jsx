import React from "react"

import { StyledHireMe } from "../../styles"
import PatternImage from "../../images/pattern2.png"

const HireMe = () => {
  return (
    <StyledHireMe>
      <div
        className="hire"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <h3>Hire Me</h3>

        <iframe
          title="HireMe"
          src="https://drive.google.com/file/d/1_qDsLGjKbRJmW4VTuq1jPFbYpMXYmPSR/preview"
        ></iframe>
      </div>
    </StyledHireMe>
  )
}

export default HireMe
