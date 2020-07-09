/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text } from "@theme-ui/components"
import React, { useState } from "react"
import MenuItem from "./menuItem"
import { checkPropTypes } from "prop-types"

const AllIn = ({ menuData, setModalActive, onBackClick }) => {
  const [withDollar, setWithDollar] = useState(false)

  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ("item" in curr) {
          acc.childItems.push(curr)
        } else if ("section" in curr) {
          acc.childSections.push(curr)
        }
        return acc
      },
      { childItems: [], childSections: [] }
    )
  }

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu
    const parsedSection = splitSectionChildren(menu)
    return (
      <div>
        {/* header with section name and description */}

        <div className="menuContainer">
          <p className="menuSectionTitle">{section.name}</p>
          <div className="menuItemsContainer">
            {parsedSection.childItems.map(({ item }) => {
              return (
                <MenuItem
                  type={"default"}
                  withDollar={withDollar}
                  item={item}
                  // setModalActive={setModalActive}
                />
              )
            })}
          </div>
        </div>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </div>
    )
  }
  return (
    <>
      {onBackClick ? (
        <a className="back-to-menu-btn button" onClick={() => onBackClick()}>
          ← Back
        </a>
      ) : (
        ""
      )}
      {renderMenu(menuData)}
    </>
  )
}

export default AllIn
