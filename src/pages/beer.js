import React from "react"
import Layout from "../components/Layout"
import EventForm from "../components/forms/EventsForm"
import Menu from "../components/menus/Menu"
import PDFMenu from "../assets/PDFs/DocksidePartyOptions.pdf"
export default function PrivateEvents() {
  return (
    <Layout>
      <section id="beer-page">
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
      </section>
    </Layout>
  )
}
