import React from "react"
import { Image, Box, Flex, Text } from "@theme-ui/components"
import Price from "./price"
import PriceWithVariants from "./PriceWithVariants"
import camera from "../images/camera.svg"

const MenuItem = ({ item, type, withDollar, hasMenuImages }) => {
  const getMenuItemType = () => {
    switch (type) {
      case "someCase":
        console.log("someCase selected")
      default:
        return defaultType()
    }
  }

  const defaultType = () => (
    <div className="menuItemInnerContainer">
      {item.photo_id ? (
        <img
          className="menuItemImage"
          src="https://res.cloudinary.com/gonation/gonation.data.prod/rtzoxsdqpogalxyxrzya"
          alt="menu item"
        />
      ) : (
        <img
          className="menuItemDefaultImage"
          src="https://res.cloudinary.com/gonation/gonation.data.prod/rtzoxsdqpogalxyxrzya"
          alt="default menu item"
        />
      )}
      <div className="menuItemContentContainer">
        {item.variants.length && item.variants[0].label === "" ? (
          <div className="namepricecontainer">
            <p className="menuItemName">{item.name}</p>
            <Price withDollar={withDollar} variants={item.variants} toSide />
          </div>
        ) : (
          <div>
            <p className="menu.menuItemName">{item.name}</p>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </div>
        )}
        <p className="menuItemDescription">{item.desc}</p>
      </div>
    </div>
  )

  return <div className="menu-item menuItemContainer">{getMenuItemType()}</div>
}

export default MenuItem
