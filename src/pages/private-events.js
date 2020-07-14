import React, {useState} from "react"
import Layout from "../components/Layout"
import EventForm from "../components/forms/EventsForm"
import Menu from "../components/menus/Menu"
import PDFMenu from "../assets/PDFs/DocksidePartyOptions.pdf"
// import PrintableMenuBtnImage from "../assets/private-events-1.jpg"
// import MakeEnquiryBtnImage from "../assets/private-events-2.jpg"

export default function PrivateEvents({data}) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
  const scrollToSection = sectionSelector => {
    document.querySelector(sectionSelector).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    })
  }

  return (
    <Layout pageTitle="private-events" data={siteData} navIsOpen={navIsOpen}>
      <section id="private-events-page">
        <div className="content">
          <h1>Private Events</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="cta-boxes">
          <a className="cta-box" href={PDFMenu} target="_blank">
            // todo replace with cloudinary images
            {/* <img className="cta-image" src={PrintableMenuBtnImage} alt="" /> */}
            <h3 className="title">Printable Menu</h3>
          </a>

          <div
            className="cta-box"
            onClick={() => {
              scrollToSection(".form-container")
            }}
          >
            // todo replace with cloudinary images
            {/* <img className="cta-image" src={MakeEnquiryBtnImage} alt="" /> */}
            <h3 className="title">Make an Enquiry</h3>
          </div>
        </div>

        <div className="private-events-packages content">
          <h2 className="title">PACKAGES</h2>
          <Menu poweredListID={"powered-list-8"} mode={"cellsThenAllInOnce"} />
        </div>

        <div className="form-container content">
          <h2>Make An Enquiry</h2>
          <EventForm formName="Private Events" />
        </div>
      </section>
    </Layout>
  )
}

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

