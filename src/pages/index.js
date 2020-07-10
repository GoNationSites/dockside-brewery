import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import moment from "moment"
import { ParallaxProvider } from "react-scroll-parallax"
import logo from "../../public/logo-gray.png"
import Layout from "../components/Layout"
import Slider from "../components/slider"
import Shout from "../components/shout"
import Hops from "../components/hops"
import Beer from "../components/beer"
import FeaturedBeer from "../components/FeaturedBeer"
import MenuShowcase from "../components/MenuShowcase"
import ParallaxImage from "../components/parallaxImage"
import EventsShowcase from "../components/EventsShowcase"
import Facebook from "../components/facebook"
import Instagram from "../components/instagram"
import Twitter from "../components/twitter"
import formatAddress from '../helpers/formatAddress'
import getGoogleStr from "../helpers/getGoogleStr"
let jsonpAdapter = require("axios-jsonp")

export default function Index({data}) {
  const siteData = data.siteMetaData.data
  const bizID = data.siteMetaData.bizID
  
  const [shoutBG, setShoutBG] = useState(null)
  useEffect(() => {
    const shoutURL =
      `https://data.prod.gonation.com/profile/shoutsnew/${bizID}`
    axios({
      url: shoutURL,
      adapter: jsonpAdapter,
    }).then(res => {
      const cloudinaryID = res.data.shout.image.image.cloudinaryId
      if (res.data.shout.poweredImageStyle === "background") {
        setShoutBG(getShoutImage(cloudinaryID))
      }
      console.log(res.data)
    })
  }, [])

  const getShoutImage = img => {
    return `https://res.cloudinary.com/gonation/w_2000/${img}`
  }

  const getShoutBGStyle = () => {
    return {
      background: `url(${shoutBG})`,
      backgroundSize: "cover",
      zIndex: "0",
    }
  }

  return (
    <Layout pageTitle="home" data={siteData}>
      <ParallaxProvider>
        <div className="is-hidden-desktop">
          <Slider />
        </div>
        <div className="is-hidden-mobile">
          <div className="desktop-video-container">
            {shoutBG ? (
              <div
                style={shoutBG && getShoutBGStyle()}
                className={`slide-container ${
                  shoutBG ? "slide-container__with-shout" : ""
                }`}
              ></div>
            ) : (
              <video muted="true" muted playsInline autoPlay loop>
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-yachts-dock-and-the-city-9683-large.mp4"
                  type="video/mp4"
                ></source>
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-yachts-dock-and-the-city-9683-large.mp4"
                  type="video/ogg"
                ></source>
                Your browser does not support the video tag.
              </video>
            )}

            <div className="hero-text-container">
              <h1 className="title has-text-centered has-text-white">
                independent craft brewery, restaurant and waterfront biergarten
              </h1>
              <Link>Become a Dockside insider</Link>
            </div>
          </div>
        </div>

        <section className="section section-call-dir is-hidden-desktop">
          <div className="columns is-mobile is-hidden-tablet">
            <div className="column has-text-centered">
              <a>Call</a>
            </div>
            <div className="column has-text-centered">
              <a>Directions</a>
            </div>
            <div className="column has-text-centered">
              <a>Book a table</a>
            </div>
          </div>
        </section>
        <section className="section section-shout is-hidden-desktop">
          <div className="shout-logo">
            <img src={logo} alt="Dockside Brewery" />
          </div>
          <div className="hops-bg">
            <Hops fill="#efbf3e17" />
          </div>
          <Shout />
        </section>
        <section className="section__hero-footer is-hidden-touch">
          <div class="hero-footer-wrapper">
            <div className="hero-footer-wrapper__left">
              <div>
            <a target="_blank" rel="noopener" href={getGoogleStr(siteData.name, siteData.street, siteData.city, siteData.zip, siteData.state)}>Address: {formatAddress(siteData.state,siteData.street,siteData.city,siteData.zip)}</a>
              </div>
              <div>
                <a href={`tel:${siteData.phone}`}>Phone: {siteData.phone} </a>
              </div>
              <div>
                <Link class="special">
                  Join The Mug Club <Beer width="30px" fill="#fff" />{" "}
                </Link>
              </div>
            </div>
            <div className="her-footer-wrapper__left">
              <div className="social-icons">
                <div>
                  <a href="">
                    <Facebook fill="#fff" width="30px" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <Instagram fill="#fff" width="30px" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <Twitter fill="#fff" width="30px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" section-curbside">
          <div className="columns is-paddingless is-marginless">
            <div className="column section">
              <h3 className="title">FOR CURBSIDE PICKUP, PLEASE:</h3>
              <ul>
                <li>
                  <p>
                    Have your order confirmation number ready when you arrive
                  </p>
                </li>
                <li>
                  <p>Stay in your car until directed otherwise</p>
                </li>
                <li>
                  <p>
                    If no one is waiting outside, give us a call at 203 693 3900
                  </p>
                </li>
              </ul>
            </div>
            <div className="column is-paddingless" style={{ display: "flex" }}>
              <img
                src="https://res.cloudinary.com/gonation/image/upload/w_800/q_auto/v1594238070/sites/dockside-brewing/dockside-curbside.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="section section__draft-of-the-week">
          <div className="container">
            <FeaturedBeer />
          </div>
        </section>
        <section className=" section__pizza-showcase">
          <MenuShowcase />
        </section>
        <div className="is-hidden-mobile">
          <ParallaxImage />
        </div>
      </ParallaxProvider>
      <section className="section section__events-module">
        <EventsShowcase />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    siteMetaData {
      data {
        avatar {
          imageBaseUrl
        }
        city
        desc
        cover {
          imageBaseUrl
        }
        hours {
          fri {
            close
            open
          }
          mon {
            close
            open
          }
          sat {
            close
            open
          }
          sun {
            close
            open
          }
          thu {
            close
            open
          }
          tue {
            close
            open
          }
          wed {
            close
            open
          }
        }
        lastPricelistUpdate {
          sec
          usec
        }
        links {
          facebook
          instagram
          twitter
          website
          youtube
        }
        loc
        slug
        name
        phone
        state
        street
        zip
      }
      bizID
    }
  }
`
