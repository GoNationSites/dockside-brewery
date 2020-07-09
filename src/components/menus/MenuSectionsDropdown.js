import React, { useState } from "react"

export default function MenuSectionsDropdown({ childSections, onCellClick }) {
  const [dropdownOpen, toggleDropdown] = useState(false)

  return (
    <div
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      <button>Our Menu </button>

      {dropdownOpen ? (
        <div className="menu-sections-dropdown">
          {childSections.map(({ section, inventory }) => {
            return (
              <div
                className="dropdown-section"
                key={section.name}
                onClick={onCellClick({ section, inventory })}
              >
                {section.name}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
