import React, { useState } from "react"
import styled from "styled-components"
import SectionDropdown from "./SectionDropdown"
export default function MenuSectionsDropdown({ childSections, onCellClick }) {
  const [dropdownOpen, toggleDropdown] = useState(false)

  return (
    <MenuSectionsDropDownContainer
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      <MenuDropdownBtn>
        Our Menu
        <ArrowDown
        // style={`${
        //   dropdownOpen ? { color: "scale(1.2)" } : { display: "inline" }
        // }`}
        >
          {" "}
          ▼
        </ArrowDown>
      </MenuDropdownBtn>

      {dropdownOpen ? (
        <SectionDropdown
          childSections={childSections}
          onCellClick={onCellClick}
        />
      ) : null}
    </MenuSectionsDropDownContainer>
  )
}

const MenuSectionsDropDownContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`
const MenuDropdownBtn = styled.button`
  background: ${props =>
    props.theme.secondary ? props.theme.secondary : "black"};
  border: 2px solid
    ${props => (props.theme.secondary ? props.theme.secondary : "black")};
  color: white;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
`

const ArrowDown = styled.div`
  margin-left: 10px;
  display: inline;
`
