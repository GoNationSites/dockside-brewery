import React from "react"

const MenuTab = ({
  onCellClick,
  section,
  inventory,
  activeSection,
  displayedCellSection,
  setDisplayedCellSection,
}) => {
  return (
    <div
      className={`section-tab has-text-centered ${
        activeSection.section === section ? "tab-is-active" : ""
      } ${displayedCellSection.section === section ? "tab-is-active" : ""} `}
      onClick={() => setDisplayedCellSection({ section, inventory })}
    >
      <h2 className="has-text-weight-bold">{section.name}</h2>
    </div>
  )
}

export default MenuTab
