import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import AboutHeroImage from "../assets/about-hero.jpg"
import AboutImage from "../assets/about-image.jpg"
export default function About() {
  const [aboutData, setAboutData] = useState({
    aboutData: null,
    isLoading: true,
  })

  const id = "bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setAboutData({
        ...aboutData,
        aboutData: res.data,
        isLoading: false,
      })
    })
  }, [])

  return (
    <Layout>
      <section id="about-page">
        <div className="hero-image">
          <img src={AboutHeroImage}></img>
        </div>

        <section className="about-content">
          <div className="about-text">
            <h1 className="title">About Us</h1>
            {console.log(aboutData)}
            <p>
              {!aboutData.isLoading && aboutData
                ? aboutData.aboutData.desc
                : ""}
            </p>
          </div>

          <div className="image-container">
            <img src={AboutImage} />
          </div>
        </section>
      </section>
    </Layout>
  )
}
