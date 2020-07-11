import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import Menu from "../components/menus/Menu"
import ItemModal from "../components/menus/itemModal"
import AllInOnce from "../components/menus/allIn"
import CellsAndAllIn from "../components/menus/cellsAndAllIn"
import TabsView from "../components/menus/tabsView"

export default function Food() {
  return (
    <Layout>
      <section id="drinks-page">
        <Menu poweredListID={"powered-list-7"} mode={"cellsThenAllInOnce"} />
      </section>
    </Layout>
  )
}
