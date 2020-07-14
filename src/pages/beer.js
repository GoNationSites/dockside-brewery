import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import EventForm from "../components/forms/EventsForm"
import Menu from "../components/menus/Menu"
export default function PrivateEvents({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  return (
    <Layout pageTitle="beer" data="siteData" navIsOpen={navIsOpen}>
      <Page>
        {/* <div className="content">
          <h1>Beer</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not.
          </p>
        </div> */}

        <div>
          <Menu poweredListID={"powered-list-9"} mode={"allInOnce"} />
        </div>
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
