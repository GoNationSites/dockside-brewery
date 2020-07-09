import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import Star from './star'
let jsonpAdapter = require("axios-jsonp")


const DesktopShoutBanner = () => {
    const [shoutData, setShoutData] = useState(null)
    const [showShoutModal, setShowShoutModal] = useState(false)
    const shoutURL =
      "https://data.prod.gonation.com/profile/shoutsnew/bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

    useEffect(() => {
      axios({
        url: shoutURL,
        adapter: jsonpAdapter,
      }).then(res => {
        setShoutData(res.data)
      })
    }, [])

    

    const getShoutImage = () => {
      return `https://res.cloudinary.com/gonation/w_800/${shoutData.shout.image.image.cloudinaryId}`
    }

    const renderShoutModal = () => {
        return (
          <div className="shout-modal modal is-active">
            <div className="modal-content">
                <div className="close-modal" onClick={() => setShowShoutModal(false)}>
                    close
                </div>
              <div className="star-bg">
                <Star width="100%" fill={"#c3bdb718"} />
              </div>
              <div className="columns">
                <div className="column">
                  <img src={getShoutImage()} alt={shoutData.shout.text} />
                </div>
                <div className="column">
                  <h2 className=" shout-business-name">
                   Recent Shout From {shoutData.shout.business.name}
                  </h2>
                  <p className="shout-message">{shoutData.shout.text}</p>
                  <p className="shout-date">
                    Shouted {moment(shoutData.shout.createdAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }

    return (
      <>
        {showShoutModal && renderShoutModal()}
        <div
          className="desktop-shout-banner"
          onClick={() => setShowShoutModal(true)}
        >
          {shoutData ? (
            <>
              <p className="shout-message">
                {/* Recent shout from {shoutData.shout.business.name}{" | "} */}
                {shoutData.shout.text} | Shouted{" "}
                {moment(shoutData.shout.createdAt).fromNow()}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    )
}

export default DesktopShoutBanner;



