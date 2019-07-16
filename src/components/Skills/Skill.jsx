import React from "react"

import { Skill as StyledSkill } from "../../styles"

export default function Skill({ skill }) {
  const { title, iconUrl } = skill
  return (
    <StyledSkill>
      <div className="skill">
        <img src={iconUrl} alt={title} />
        <p>{title}</p>
      </div>
    </StyledSkill>
  )
}
