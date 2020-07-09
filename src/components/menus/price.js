import React from "react"
import { Text, Box, Flex } from "@theme-ui/components"
const Price = ({ variants, withDollar, toSide }) => (
  <div className="menuPriceContainer">
    {variants[0].labelTitle ? (
      <p className="menuItemPriceLabel">{variants[0].labelTitle}</p>
    ) : (
      ""
    )}
    <p className="menuItemPriceLabel">{variants[0].label}</p>{" "}
    <p className="menuItemPrice">
      {withDollar ? "$" : ""}
      {variants[0].price}
    </p>
  </div>
)

export default Price
