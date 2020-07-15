import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import EventForm from "../components/forms/EventsForm"
import Menu from "../components/menus/Menu"
import PDFMenu from "../assets/PDFs/DocksidePartyOptions.pdf"

export default function PrivateEvents({ data }) {
  const scrollToSection = sectionSelector => {
    document.querySelector(sectionSelector).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    })
  }

  return (
    <Layout pageTitle="private-events">
      <Page>
        <Content>
          <PageTitle>Private Events</PageTitle>

          <PageDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </PageDescription>
        </Content>

        <PrivateEventsPackages>
          <SectionTitle>PACKAGES</SectionTitle>
          <Menu poweredListID={"powered-list-8"} mode={"cellsThenAllInOnce"} />
        </PrivateEventsPackages>

        <CTABoxes>
          <CTABox href={PDFMenu} target="_blank">
            {/* // todo replace with cloudinary images */}
            <CTAImage
              src={
                "https://images.pexels.com/photos/4558395/pexels-photo-4558395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              alt=""
            />
            <CTATitle>Printable Menu</CTATitle>
          </CTABox>

          <CTABox
            onClick={() => {
              scrollToSection(FormContainer)
            }}
          >
            {/* // todo replace with cloudinary images */}
            <CTAImage
              src={
                "https://images.pexels.com/photos/4558395/pexels-photo-4558395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              alt=""
            />
            <CTATitle>Make an Enquiry</CTATitle>
          </CTABox>
        </CTABoxes>

        <FormContainer>
          <SectionTitle>Make An Enquiry</SectionTitle>
          <EventForm formName="Private Events" />
        </FormContainer>
      </Page>
    </Layout>
  )
}

const Page = styled.section`
  background-color: ${props =>
    props.theme.light ? props.theme.light : "grey"};
  padding: 2rem 1rem;
`

const Content = styled.div`
  max-width: 767px;
  margin: 0 auto 2rem;
  @media (min-width: 767px) {
    text-align: center;
  }
`

const PrivateEventsPackages = styled.div`
  margin-top: 3rem;
  max-width: 767px;
  margin: 0 auto 2rem;
  @media (min-width: 767px) {
    text-align: center;
  }
`

const CTABoxes = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-between;
  max-width: 767px;
  margin: 2rem auto;
`

const CTABox = styled.a`
  display: flex;
  margin: 0.25rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 50%;
  height: 200px;
`

const CTATitle = styled.h2`
  font-size: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: white;
  @media (min-width: 767px) {
    font-size: 1.75rem;
  }
`

const CTAImage = styled.img`
  height: 100%;
  transition: all ease-in-out 0.5s;
  width: 100%;
  filter: brightness(0.5);
`

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
`

const PageDescription = styled.p`
  font-weight: 400;
`

const SectionTitle = styled.h2`
  margin: 2rem 1rem;
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
`

const FormContainer = styled.div`
  max-width: 767px;
  margin: 0 auto 2rem;
  @media (min-width: 767px) {
    text-align: center;
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
