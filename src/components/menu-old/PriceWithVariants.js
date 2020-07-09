import React from 'react'
import { Text, Box, Flex } from '@theme-ui/components'
import ListBullet from '../ui/ListBullet'
const Price = ({ variants, withDollar, toSide }) => {
  const renderPrices = () =>
    variants
      .filter(el => {
        return el.label !== ''
      })
      .map(variant => (
        <Box
          key={(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}>
          {variant.labelTitle ? <Flex>{variant.labelTitle}</Flex> : ''}
          <Flex sx={{ marginBottom: 2 }}>
            <Text
              sx={{ marginLeft: 3, marginRight: 3 }}
              variant='menu.menuItemPriceLabel'>
              {'  '} <ListBullet /> {variant.label}
            </Text>{' '}
            <Text variant='menu.menuItemPriceVariants'>
              {withDollar ? '$' : ''}
              {variant.price}
            </Text>
          </Flex>
        </Box>
      ))

  return <div className='variants-container'>{renderPrices()}</div>
}

export default Price
