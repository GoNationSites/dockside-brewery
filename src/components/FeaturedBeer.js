import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import Hops from "../components/hops"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
let jsonpAdapter = require("axios-jsonp")

const FeaturedBeer = () => {
  const [featuredBeer, setFeaturedBeer] = useState(null)
  const beerURL =
    "https://data.prod.gonation.com/pl/get?profile_id=bzn-yO3xgUsKQCS7GWg0Q2ewbQ&callback=foo&powerlistId=powered-list-5"

  useEffect(() => {
    console.log("hey")
    axios({
      url: beerURL,
      adapter: jsonpAdapter,
    }).then(res => {
      const beer = res.data[0].inventory[0].item
      setFeaturedBeer(beer)
    })
  }, [])

  const renderFeaturedBeer = () => {
    const { name, desc, imageUrl } = featuredBeer
    return (
      <div className="columns columns__featured-beer">
        <div className="column column__beer-text">
          <h3 className="title">Draft Of The Week</h3>
          <h2 className="title title__beer-title">{name}</h2>
          <p>{desc}</p>
          <Link className="button is-hidden-touch">
            View All Beers{" "}
            <span>
              <Hops fill="#fff" width="40px" />
            </span>
          </Link>
        </div>
        <div className="column">
          <img src={cloudinaryOptimize(imageUrl, "800")} alt={name} />
          <div className="has-text-centered section pb-0">
            <Link className="button is-hidden-desktop">
              View All Beers{" "}
              <span>
                <Hops fill="#fff" width="20px" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return <>{featuredBeer && renderFeaturedBeer()}</>
}

export default FeaturedBeer
