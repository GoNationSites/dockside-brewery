import React from "react"
import { Image, Box, Flex, Text } from "@theme-ui/components"
import Price from "./price"
import PriceWithVariants from "./PriceWithVariants"
import LogoRed from "../images/logored.png"

const MenuItem = ({ item, type, withDollar, hasMenuImages }) => {
  const getMenuItemType = () => {
    switch (type) {
      case "someCase":
        console.log("someCase selected")
      default:
        return defaultType()
    }
  }

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it. 
  const removeImageCopy = img => img.substring(0, img.length - 5)

  const defaultType = () => (
    <div className="menuItemInnerContainer">
      {console.log(item)}
      {item.photo_id ? (
        <div className="menuItemImage">
          <div className="image-fill"></div>
          <img src={item.imageUrl.includes('copy') ? removeImageCopy(item.imageUrl) : item.imageUrl} alt="menu item" />
        </div>
      ) : (
        <div className="menuItemDefaultImage">
          <div className="image-fill"></div>
          <img
            className="menuItemDefaultImage"
            src={LogoRed}
            alt="default menu item"
          />
        </div>
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
