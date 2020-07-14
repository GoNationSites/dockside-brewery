import React, { useState } from "react"
import Layout from "../components/Layout"
import Gallery from "../components/gallery/Gallery"
export default function GalleryPage({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="Gallery" data={siteData} navIsOpen={navIsOpen}>
      <Gallery />
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
      links {
        facebook
        instagram
        twitter 
        youtube
        website
      }
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

