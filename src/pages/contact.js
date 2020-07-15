import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import SocialIcons from "../components/SocialIcons/SocialIcons"
import Hours from "../components/hours/hoursOld"
import ContactForm from "../components/forms/ContactForm"
// import Hours from "../components/hours/Hours"

export default function Contact({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID
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
      <Address>
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
      </Address>
    )
  }

  return (
    <Layout pageTitle="contact" data={siteData} navIsOpen={navIsOpen}>
      <Page>
        <ContactDetailsContainer className="contact-details-container">
          <ContactDetails>
            <SectionTitle>Contact</SectionTitle>
            {!contactData.isLoading && contactData.contactData
              ? renderAddress()
              : ""}
          </ContactDetails>

          <FormContainer>
            <SectionTitle>Email Us</SectionTitle>
            <ContactForm formName="contact" />
          </FormContainer>
        </ContactDetailsContainer>

        <ContactHoursMap className="contact-hours-map">
          {!contactData.isLoading && contactData.contactData ? (
            <Hours hours={contactData.contactData.hours} />
          ) : (
            ""
          )}

          <MapContainer>
            <Map
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12007.933211490872!2d-73.1072876!3d41.2003376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f4af0f37c1be1!2sDockside%20Brewery!5e0!3m2!1sen!2sus!4v1594321883080!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></Map>
          </MapContainer>
        </ContactHoursMap>
      </Page>
    </Layout>
  )
}

const Page = styled.section`
  background-color: ${props =>
    props.theme.light ? props.theme.light : "grey"};
`

const ContactDetailsContainer = styled.div`
  @media (min-width: 767px) {
    display: flex;
    align-items: stretch;
    max-width: 1024px;
    margin: 0 auto;
  }
`

const ContactDetails = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: ${props =>
    props.theme.primary ? props.theme.primary : "grey"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 767px) {
    width: 50%;
    padding: 1rem;
    margin: 0;
  }
`

const Address = styled.div`
  > * {
    color: white;
    margin-bottom: 0.25rem;
    text-align: center;
  }
`

const FormContainer = styled.div`
  padding: 1rem;
  background-color: white;
  @media (min-width: 767px) {
    width: 50%;
    padding: 1rem;
    margin: 0;
  }
`

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => (props.theme.secondary ? props.theme.secondary : "black")};
  margin-bottom: 1rem;
  text-align: center;
`

const ContactHoursMap = styled.div`
  @media (min-width: 767px) {
    padding: 2rem 0rem;
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
  }
`

const MapContainer = styled.div`
  width: 100%;
  @media (min-width: 767px) {
    width: 50%;
  }
`
const Map = styled.iframe`
  width: 100%;
  min-height: 40vh;
  height: 100%;
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
