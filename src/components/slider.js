import React, { useState, useEffect } from 'react';
import {Link} from 'gatsby'
import "react-slideshow-image/dist/styles.css"
import { Zoom } from "react-slideshow-image"
import axios from "axios"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
let jsonpAdapter = require("axios-jsonp")

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

const Slider = () => {
  const [shoutBG, setShoutBG] = useState(null)
    useEffect(() => {
      const shoutURL =
        "https://data.prod.gonation.com/profile/shoutsnew/bzn-yO3xgUsKQCS7GWg0Q2ewbQ"
      axios({
        url: shoutURL,
        adapter: jsonpAdapter,
      }).then(res => {
        const cloudinaryID = res.data.shout.image.image.cloudinaryId
        console.log(res.data.shout.image.image.cloudinaryId)
        if (res.data.shout.poweredImageStyle === "background") {
          setShoutBG(getShoutImage(cloudinaryID))
        }
        console.log(res.data)
      })
    }, [])

    const getShoutImage = (img) => {
      return `https://res.cloudinary.com/gonation/w_2000/${img}`
    }

    const getShoutBGStyle = () => {
      return {
        background: `url(${shoutBG})`,
        backgroundSize: 'cover',
        zIndex: '0',
      }
    }

    return (
      <div
        style={shoutBG && getShoutBGStyle()}
        className={`slide-container ${
          shoutBG ? "slide-container__with-shout" : ""
        }`}
      >
        {shoutBG ? (
          <div className="hero-text-container">
            <h1 className="title has-text-centered has-text-white">
              independent craft brewery, restaurant and waterfront biergarten
            </h1>
            <Link>Become a Dockside insider</Link>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    )
}

export default Slider;
