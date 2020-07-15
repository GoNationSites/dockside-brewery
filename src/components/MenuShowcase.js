import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
import Pizza from './pizza'
let jsonpAdapter = require("axios-jsonp")

const MenuShowcase = () => {
  const [pizzaData, setPizzaData] = useState(null)
  const [activeItem, setActiveItem] = useState(null)
  const pizzaURL =
    "https://data.prod.gonation.com/pl/get?profile_id=bzn-yO3xgUsKQCS7GWg0Q2ewbQ&callback=foo&powerlistId=powered-list-6"

  useEffect(() => {
    axios({
      url: pizzaURL,
      adapter: jsonpAdapter,
    }).then(res => {
      const pizzas = res.data[0].inventory.filter(
        ({ item }, idx) => idx < 7 && item && item.photo_id !== null
      )
      setActiveItem(pizzas[0].item)
      setPizzaData(pizzas)
    })
  }, [])

  const renderShowcase = () => {
    return (
      <div className="column column__menu-showcase is-5 is-marginless is-paddingless">
        <h3 className="title">New Haven classic brick oven pizza</h3>
        <div className="active-image">
          <img
            src={cloudinaryOptimize(activeItem.imageUrl, '600')}
            alt={activeItem.name}
          />
          <span>{activeItem.name}</span>
        </div>
        <div className="image-thumbs">
          {pizzaData
            .filter(el => el.item.name !== activeItem.name)
            .map(el => {
              return (
                <div onClick={() => setActiveItem(el.item)}>
                  <img
                    src={cloudinaryOptimize(el.item.imageUrl, '400')}
                    alt={el.item.name}
                  />
                </div>
              )
            })}
        </div>
      </div>
    )
  }

  return (
    <div className="columns is-marginless is-vcentered">
      {pizzaData && activeItem && renderShowcase()}
      <div className="column">
        <div className="container__pizza">
          {/* <h4 className="title">
            Dockside <span> Pizza</span>
          </h4> */}
          <p className="try-title">
            <span>{activeItem && activeItem.name}</span>
          </p>
          <p className="try-desc">{activeItem && activeItem.desc} </p>
          <div className="has-text-centered">
            <Link to="/" className="button">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuShowcase
