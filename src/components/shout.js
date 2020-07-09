import React, {useState, useEffect} from 'react';
import axios from 'axios'
import moment from 'moment'
let jsonpAdapter = require("axios-jsonp")

const Shout = () => {
    const [shoutData, setShoutData] = useState(null)
    const shoutURL = 'https://data.prod.gonation.com/profile/shoutsnew/bzn-yO3xgUsKQCS7GWg0Q2ewbQ'

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

    
    return (
        <div className="shout-container">
            {shoutData ? 
                <>
                    <h3 className="has-text-centered shout-title">Recent shout from</h3>
                    <h2 className="has-text-centered shout-business-name">{shoutData.shout.business.name}</h2>
                    <p className="shout-message">{shoutData.shout.text}</p>
                        <p className="shout-date">Shouted {moment(shoutData.shout.createdAt).fromNow()}</p>

                    <div className="shout-image">
                        <img src={getShoutImage()} alt="Dockside Brewery Shout image"/>
                    </div>
                </> : ''
            }
        </div>
    );
}

export default Shout;
