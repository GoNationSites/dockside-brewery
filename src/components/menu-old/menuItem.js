import React from 'react'
import { Image, Box, Flex, Text } from '@theme-ui/components'
import Price from './price'
import PriceWithVariants from './PriceWithVariants'
import camera from '../images/camera.svg'

const MenuItem = ({ item, type, withDollar, hasMenuImages }) => {
  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
        console.log('someCase selected')
      default:
        return defaultType()
    }
  }

  const defaultType = () => (
    <Flex variant='menu.menuItemInnerContainer'>
      {hasMenuImages ? (
        item.photo_id ? (
          <Image
            variant='menu.menuItemImage'
            src={item.imageUrl}
            alt='menu item'
          />
        ) : (
          ''
          // <Image
          //   variant='menu.menuItemDefaultImage'
          //   src={camera}
          //   alt='default menu item'
          // />
        )
      ) : (
        ''
      )}
      <Box variant='menu.menuItemContentContainer'>
        {item.variants.length && item.variants[0].label === '' ? (
          <Flex>
            <Text variant='menu.menuItemName'>{item.name}</Text>
            <Price withDollar={withDollar} variants={item.variants} toSide />
          </Flex>
        ) : (
          <Box>
            <Text variant='menu.menuItemName'>{item.name}</Text>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </Box>
        )}
        <Text variant='menu.menuItemDescription'>{item.desc}</Text>
      </Box>
    </Flex>
  )

  return (
    <Box
      variant='menu.menuItemContainer'
      className={`menu-item ${item.photo_id ? 'item-has-img' : ''}`}>
      {getMenuItemType()}
    </Box>
  )
}

export default MenuItem
