import React from 'react'
import { Text, Box, Flex } from '@theme-ui/components'
import ListBullet from '../ui/ListBullet'
const Price = ({ variants, withDollar, toSide }) => (
  <Box variant='menu.menuPriceContainer'>
    {variants[0].labelTitle ? (
      <Text variant='menu.menuItemPriceLabel'>{variants[0].labelTitle}</Text>
    ) : (
      ''
    )}
    <Text variant='menu.menuItemPriceLabel'>{variants[0].label}</Text>{' '}
    <Text variant='menu.menuItemPrice'>
      {withDollar ? '$' : ''}
      {variants[0].price}
    </Text>
  </Box>
)

export default Price
