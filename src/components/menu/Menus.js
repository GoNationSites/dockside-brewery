import React, { useEffect, useState } from "react"
import { jsx, Box, Image, Flex, Heading, Text, Styled, Spinner } from "theme-ui"
import AllIn from "./allIn"
let axios = require("axios")
let jsonpAdapter = require("axios-jsonp")

export default function Menus() {
  const [menus, setMenus] = useState({
    menuData: null,
    isLoading: true,
    error: false,
  })

  const fetchMenu = () => {
    return axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=bzn-yO3xgUsKQCS7GWg0Q2ewbQ`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        console.log(res)
        setMenus({
          ...menus,
          menuData: res.data,
          isLoading: false,
        })
        return res.data
      })
      .catch(e => {
        console.log("error : ", console.log(e))
        setMenus({ ...menus, isLoading: false, error: true })
      })
  }

  const setMenuToLocalStorage = async () => {
    const menuData = await fetchMenu()
    localStorage.setItem("powered-list", JSON.stringify(menuData))
    // store object in local storage
  }

  useEffect(() => {
    if (
      !localStorage.getItem("powered-list") ||
      localStorage.getItem("powered-list") === "null" ||
      localStorage.getItem("powered-list") === "undefined"
    ) {
      console.log("fetching menu")
      // fetching menu from external gonation resource
      setMenuToLocalStorage()
    } else {
      console.log("getting menu from local")
      // gets menu from localstorage if previously visited site.
      setMenus({
        ...menus,
        menuData: JSON.parse(localStorage.getItem("powered-list")),
        isLoading: false,
      })
    }
  }, [])

  return (
    <>
      {/*  if data has arrived then load else show loading*/}

      {!menus.isLoading && menus.menuData ? (
        <>
          {menus.menuData.length ? (
            <Box variant="page.section">
              <Text variant="sectionHeading">Our Menus</Text>
              <AllIn menuData={menus.menuData} />
            </Box>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {menus.isLoading && !menus.error ? (
            <Box variant="spinnerContainer">
              <Spinner />
            </Box>
          ) : (
            ""
          )}
        </>
      )}
    </>
  )
}
