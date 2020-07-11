import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import SocialIcons from "../components/SocialIcons/SocialIcons"
import Hours from "../components/hours/hoursOld"
import ContactForm from "../components/forms/ContactForm"
// import Hours from "../components/hours/Hours"

export default function Contact() {
  const [contactData, setContactData] = useState({
    contactData: null,
    isLoading: true,
  })

  const id = "bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setContactData({
        ...contactData,
        contactData: res.data,
        isLoading: false,
      })
    })
  }, [])

  const renderAddress = () => {
    const {
      name,
      street,
      city,
      state,
      zip,
      phone,
      links: { facebook, instagram, twitter },
    } = contactData.contactData
    return (
      <div className="address">
        {console.log(contactData)}
        <h1>{name}</h1>
        <p>{street}</p>
        <p>
          {city}, {state}
        </p>
        <p>{zip}</p>
        <br></br>
        <p>{phone}</p>

        <SocialIcons
          instagram={instagram}
          facebook={facebook}
          twitter={twitter}
        />
      </div>
    )
  }

  return (
    <Layout>
      <section id="contact-page">
        <section className="contact-details-container">
          <div className="contact-details">
            <h1 className="title">Contact</h1>
            {!contactData.isLoading && contactData.contactData
              ? renderAddress()
              : ""}
          </div>

          <div className="form-container">
            <h3 className="title">Email Us</h3>
            <ContactForm formName="contact" />
          </div>
        </section>

        <section className="contact-hours-map">
          {!contactData.isLoading && contactData.contactData ? (
            <Hours hours={contactData.contactData.hours} />
          ) : (
            ""
          )}

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12007.933211490872!2d-73.1072876!3d41.2003376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f4af0f37c1be1!2sDockside%20Brewery!5e0!3m2!1sen!2sus!4v1594321883080!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </section>
    </Layout>
  )
}
