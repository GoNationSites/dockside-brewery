import React, {useState} from "react"
import Layout from "../components/Layout"
import Events from "../components/events/Events"
export default function events({data}) {
  return (
    <Layout pageTitle="events">
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

