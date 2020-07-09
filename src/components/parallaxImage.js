import React from 'react'
import { ParallaxBanner, Parallax } from "react-scroll-parallax"
import cloudinaryOptimize from '../helpers/cloudinaryOptimize'

const ParallaxImage = () => (
  <ParallaxBanner
    className="custom-class"
    className="your-class"
    layers={[
      {
        image: cloudinaryOptimize(
        "https://res.cloudinary.com/gonation/image/upload/v1594256851/sites/dockside-brewing/parallax.jpg",
        2000)
      ,
        amount: 1,
      },
    ]}
    style={{
      height: "500px",
    }}
  >
  </ParallaxBanner>
)

export default ParallaxImage