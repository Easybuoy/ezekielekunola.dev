import React from "react"
import Particles from "react-particles-js"

import { Particle as StyledParticle } from "../../styles"
import { nightSkyPreset } from "./preset"

const Particle = ({ children }) => {
  return (
    <StyledParticle>
      <Particles className="particles" params={nightSkyPreset} />
      {children}
    </StyledParticle>
  )
}

export default Particle
