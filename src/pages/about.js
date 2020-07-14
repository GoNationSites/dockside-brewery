import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
export default function About({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
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
    <Layout pageTitle="about" data={siteData} navIsOpen={navIsOpen}>
      <section id="about-page">
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
            // todo replace with cloudinary image instead of hardcoded
            {/* <img src={AboutImage} /> */}
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    siteMetaData {
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
      links
      loc
      slug
      name
      phone
      state
      street
      zip
      bizID
    }
  }
`
