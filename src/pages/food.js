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
