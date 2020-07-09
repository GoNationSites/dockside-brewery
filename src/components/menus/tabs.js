import React, { useEffect } from "react"
import splitSectionChildren from "../helpers/splitSectionChildren"
import MenuTab from "./menuTab"

const Tabs = ({
  menuData,
  onCellClick,
  children,
  activeSection,
  hasNestedTabs,
  displayedCellSection,
  setDisplayedCellSection,
}) => {
  const { childSections } = splitSectionChildren(menuData)

  const renderChildSections = () => {
    if (hasNestedTabs) {
      return activeSection.inventory.map(({ section, inventory }) => (
        <MenuTab
          section={section}
          inventory={inventory}
          onCellClick={onCellClick}
          activeSection={activeSection}
          displayedCellSection={displayedCellSection}
          hasNestedTabs
          setDisplayedCellSection={setDisplayedCellSection}
        />
      ))
    } else {
      return childSections.map(({ section, inventory }) => (
        <MenuTab
          section={section}
          inventory={inventory}
          onCellClick={onCellClick}
          activeSection={activeSection}
        />
      ))
    }
  }

  return (
    <div className="tabs-row">
      {displayedCellSection && renderChildSections()}
      {children}
    </div>
  )
}

export default Tabs
