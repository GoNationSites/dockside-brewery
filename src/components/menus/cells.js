import React from "react"
import splitSectionChildren from "../helpers/splitSectionChildren"
import MenuCell from "./menuCell"

const Cells = ({ menuData, onCellClick }) => {
  const { childSections } = splitSectionChildren(menuData)

  const renderChildSections = () => {
    return childSections.map(({ section, inventory }, idx) => (
      <MenuCell
        section={section}
        inventory={inventory}
        onCellClick={onCellClick}
        numSections={childSections.length}
      />
    ))
  }

  return <div className="cells-container">{renderChildSections()}</div>
}

export default React.memo(Cells)
