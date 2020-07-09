import React from "react"
import splitSectionChildren from "../helpers/splitSectionChildren"
import MenuCell from "./menuCell"
import MenuSectionDropdown from "./MenuSectionsDropdown"

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

  return (
    <div>
      <MenuSectionDropdown />
      {console.log(childSections)}
      <div className="cells-container">{renderChildSections()}</div>
    </div>
  )
}

export default React.memo(Cells)
