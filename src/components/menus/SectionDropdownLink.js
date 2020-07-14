import React, { useState } from "react"
import styled from "styled-components"
import Arrow from "../svgs/Arrow"
export default function SectionDropdownLink({
  onCellClick,
  name,
  section,
  inventory,
}) {
  const [arrowActive, toggleArrow] = useState(false)

  return (
    <DropdownSection
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
    </DropdownSection>
  )
}

const DropdownSection = styled.div`
  width: calc(50% - (0.5rem * 2));
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 767px) {
    width: calc(33.33% - (0.5rem * 2));
    margin: 0.5rem;
  }
`
