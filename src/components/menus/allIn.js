import React, { useState } from "react"
import MenuItem from "./menuItem"
import styled from "styled-components"

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
      <AllInContainer>
        {/* header with section name and description */}

        <MenuContainer>
          <MenuSectionTitle>{section.name}</MenuSectionTitle>
          <MenuItemsContainer>
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
          </MenuItemsContainer>
        </MenuContainer>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </AllInContainer>
    )
  }
  return (
    <>
      {onBackClick ? (
        <BackToMenuBtn onClick={() => onBackClick()}>← Back</BackToMenuBtn>
      ) : (
        ""
      )}
      {renderMenu(menuData)}
    </>
  )
}

export default AllIn

const BackToMenuBtn = styled.button`
  background-color: ${props =>
    props.theme.secondary ? props.theme.secondary : "black"};
  color: white;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5rem - 1px);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: calc(0.5rem - 1px);
  text-align: center;
  white-space: nowrap;
`

const AllInContainer = styled.div``
const MenuContainer = styled.div``
const MenuSectionTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
  color: ${props => (props.theme.primary ? props.theme.primary : "black")};
`
const MenuItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`
