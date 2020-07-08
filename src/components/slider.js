import React from 'react';
import {Link} from 'gatsby'
import "react-slideshow-image/dist/styles.css"
import { Zoom } from "react-slideshow-image"

const slideImages = [
  "https://res.cloudinary.com/gonation/image/upload/w_600/q_auto/v1594238069/sites/dockside-brewing/hero-1.jpg",
  "https://res.cloudinary.com/gonation/image/upload/w_600/q_auto/v1594238069/sites/dockside-brewing/hero-2.jpg",
  "https://res.cloudinary.com/gonation/image/upload/w_600/q_auto/v1594238070/sites/dockside-brewing/hero-3.jpg",
]


const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
}

const slider = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {slideImages.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
        <div className="hero-text-container">
          <h1 className="title has-text-centered has-text-white">
            independent craft brewery, restaurant and waterfront biergarten
          </h1>
          <Link>Become a Dockside insider</Link>
        </div>
      </div>
    )
}

export default slider;
