import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

import Menu from "../components/menus/Menu"

export default function Food({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="drinks" >
      <Page>
        <Menu poweredListID={"powered-list-7"} mode={"cellsThenAllInOnce"} />
      </Page>
    </Layout>
  )
}

const Page = styled.section`
  padding: 1rem;
  background-color: ${props =>
    props.theme.light ? props.theme.light : "black"};
  font-family: ${props =>
    props.theme.fonts ? props.theme.fonts.bodyFont : "Arial, sans-serif"};
  }
`
// add to styled component if there is no hero
// padding-top: ${props =>
//   props.theme.custom ? props.theme.custom.navHeight : "150px"};
// @media (min-width: 1024px) {
// padding-top: ${props =>
//   props.theme.custom ? props.theme.custom.navHeightDesktop : "150px"};

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
