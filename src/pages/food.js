import React, {useState} from "react"
import Layout from "../components/Layout"
import Menu from "../components/menus/Menu"

export default function Food({data}) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData.data
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="home" data={siteData} navIsOpen={navIsOpen}>
      <section id="food-page">
        <div className="container">
          <Menu poweredListID={"powered-list-3"} mode={"cellsThenAllInOnce"} />
        </div>
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
