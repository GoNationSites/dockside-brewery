import React from "react"
import styled from "styled-components"
import SectionDropdownLink from "./SectionDropdownLink"
export default function SectionDropdown({ childSections, onCellClick }) {
  return (
    <MenuSectionsDropdown>
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
    </MenuSectionsDropdown>
  )
}

const MenuSectionsDropdown = styled.div`
  background: ${props => (props.theme.primary ? props.theme.primary : "black")};
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  position: absolute;
  z-index: 100;
  width: 100%;
  box-shadow: 2px 2px black;
`
