import React from "react"

import { Skill as StyledSkill } from "../../styles"

export default function Skill({ skill }) {
  const { title, icon, iconUrl } = skill
  console.log(skill)
  return (
    <StyledSkill>
      <div className="skill">
        <img src={iconUrl} alt="icon" />
        <p>{title}</p>
      </div>
    </StyledSkill>
  )
}
