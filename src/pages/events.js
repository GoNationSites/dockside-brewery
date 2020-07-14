import React, {useState} from "react"
import Layout from "../components/Layout"
import Events from "../components/events/Events"
export default function events({data}) {
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="events" data={siteData}>
      <Events
        gonationID={"bzn-yO3xgUsKQCS7GWg0Q2ewbQ"}
        slug={"dockside-brewery"}
      />
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
