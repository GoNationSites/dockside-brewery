import React, { useState } from "react"
import Arrow from "../svgs/Arrow"
export default function SectionDropdownLink({
  onCellClick,
  name,
  section,
  inventory,
}) {
  const [arrowActive, toggleArrow] = useState(false)

  return (
    <div
      className="dropdown-section"
      key={section.name}
      onMouseOver={() => {
        toggleArrow(true)
      }}
      onMouseOut={() => {
        toggleArrow(false)
      }}
      onClick={onCellClick({ section, inventory })}
    >
      <span>
        {" "}
        {arrowActive ? (
          <span className="arrowcontainer">
            <Arrow
              style={{ marginRight: "1rem", width: "1rem", height: "1rem" }}
            />
          </span>
        ) : (
          ""
        )}
        {name}
      </span>
    </div>
  )
}
