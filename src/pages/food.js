import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import ItemModal from "../components/menus/itemModal"
import AllInOnce from "../components/menus/allIn"
import CellsAndAllIn from "../components/menus/cellsAndAllIn"
import TabsView from "../components/menus/tabsView"

export default function Food({data}) {
  const [menuData, setMenuData] = useState({})
  const [modalActive, setModalActive] = useState("")

  const siteData = data.siteMetaData.data
  const bizID = data.siteMetaData.bizID

  const id = "bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

  const poweredListID = "powered-list-4"

  const mode = "cellsThenAllInOnce"

  // Fetch the menu data when the template renders.
  useEffect(() => {
    console.log("menu page loaded")
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=${poweredListID}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setMenuData(res.data[0])
    })
  }, [])

  const getRenderType = () => {
    switch (mode) {
      case "allInOnce":
        return <AllInOnce menuData={menuData} setModalActive={setModalActive} />
      case "cellsThenAllInOnce":
        return (
          <CellsAndAllIn menuData={menuData} setModalActive={setModalActive} />
        )
      case "tabs":
        return <TabsView menuData={menuData} setModalActive={setModalActive} />
      case "cellsThenTabs":
        return (
          <CellsAndAllIn
            menuData={menuData}
            setModalActive={setModalActive}
            isCellsAndTabs
          />
        )
      default:
        return "no menu selected"
    }
  }

  return (
    <Layout pageTitle="food" data={siteData}>
      <section id="foodmenu">
        <section className="section section__menu-section">
          {modalActive ? (
            <ItemModal data={modalActive} setModalActive={setModalActive} />
          ) : (
            ""
          )}
          <div className="menu-wrapper">
            {menuData && menuData.section ? (
              getRenderType()
            ) : (
              <div sx={{ textAlign: "center" }}>Loading...</div>
            )}
          </div>
        </section>
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
