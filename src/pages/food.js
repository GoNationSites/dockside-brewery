import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Menu from "../components/menus/Menu"

export default function Food({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="home">
      <Page>
        <div className="container">
          <Menu poweredListID={"powered-list-3"} mode={"cellsThenAllInOnce"} />
        </div>
      </Page>
    </Layout>
  )
}

const Page = styled.section`
  padding: 1rem;
  padding-top: ${props =>
    props.theme.custom ? props.theme.custom.navHeight : "150px"};
  background-color: ${props =>
    props.theme.light ? props.theme.light : "black"};
  font-family: ${props =>
    props.theme.fonts ? props.theme.fonts.bodyFont : "Arial, sans-serif"};
  @media (min-width: 1024px) {
    padding-top: ${props =>
      props.theme.custom ? props.theme.custom.navHeightDesktop : "150px"};
  }
`

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
