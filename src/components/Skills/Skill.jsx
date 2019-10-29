import React from "react"

import { Skill as StyledSkill } from "../../styles"

export default function Skill({ skill }) {
  const { title, skillset } = skill
  let iconClass = `${skill.icon} fa-3x`
  console.log(iconClass)
  return (
    <StyledSkill>
      <div className="skill-header">
        <i className={iconClass}></i>
        <h4>{title}</h4>
      </div>

      <div className="skill">
        {skillset.map((singleSkill, i) => (
          <p>{singleSkill}</p>
        ))}
      </div>
    </StyledSkill>
  )
}
