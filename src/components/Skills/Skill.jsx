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
        <p>{title}</p>
      </div>

      <div className="skill">
        {skillset.map((singleSkill, i) => (
          <div>
            <p>{singleSkill}</p>
          </div>
        ))}
      </div>
    </StyledSkill>
  )
}
