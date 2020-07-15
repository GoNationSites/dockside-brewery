import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
export default function About({ data }) {
  const [aboutData, setAboutData] = useState({
    aboutData: null,
    isLoading: true,
  })

  const id = "bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setAboutData({
        ...aboutData,
        aboutData: res.data,
        isLoading: false,
      })
    })
  }, [])

  return (
    <Layout pageTitle="about">
      <Page>
        <AboutContent>
          <AboutText>
            <AboutTitle>About Us</AboutTitle>
            <AboutDescription>
              {!aboutData.isLoading && aboutData
                ? aboutData.aboutData.desc
                : ""}
            </AboutDescription>
          </AboutText>

          <ImageContainer>
            {/* // todo replace with cloudinary image instead of hardcoded */}
            <AboutImage src={AboutImage} />
          </ImageContainer>
        </AboutContent>
      </Page>
    </Layout>
  )
}

const Page = styled.section``

const AboutContent = styled.section`
  background-color: ${props =>
    props.theme.primary ? props.theme.primary : "black"};
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
`
const AboutText = styled.div`
  padding: 1rem;
  color: white;
  @media (min-width: 1024px) {
    padding: 2rem;
    width: 50%;
    max-width: 700px;
  }
`

const AboutTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.75rem;
`

const AboutDescription = styled.p`
  white-space: pre-wrap;
  font-weight: normal;
`

const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
    max-width: 700px;
  }
`
const AboutImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
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
