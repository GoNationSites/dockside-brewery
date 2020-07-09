import React from "react"
import Arrow from "../svgs/Arrow"
import SectionDropdownLink from "./SectionDropdownLink"
export default function SectionDropdown({ childSections, onCellClick }) {
  return (
    <div className="menu-sections-dropdown">
      {childSections.map(({ section, inventory }) => {
        return (
          <SectionDropdownLink
            onCellClick={onCellClick}
            name={section.name}
            section={section}
            inventory={inventory}
          />
        )
      })}
    </div>
  )
}
