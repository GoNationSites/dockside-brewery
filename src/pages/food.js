import React from "react"
import Layout from "../components/Layout"
import Menu from "../components/menus/Menu"

export default function Food() {
  return (
    <Layout>
      <section id="food-page">
        <Menu poweredListID={"powered-list-4"} mode={"cellsThenAllInOnce"} />
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
