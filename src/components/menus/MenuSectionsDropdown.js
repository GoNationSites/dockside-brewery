import React, { useState } from "react"
import SectionDropdown from "./SectionDropdown"
export default function MenuSectionsDropdown({ childSections, onCellClick }) {
  const [dropdownOpen, toggleDropdown] = useState(false)

  return (
    <div
      className="menu-sections-dropdown-container"
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      <button className="menu-dropdown-btn">
        Our Menu
        <span className={`arrowdown ${dropdownOpen ? "arrowdown-open" : ""}`}>
          {" "}
          ▼
        </span>
      </button>

      {dropdownOpen ? (
        <SectionDropdown
          childSections={childSections}
          onCellClick={onCellClick}
        />
      ) : null}
    </div>
  )
}
