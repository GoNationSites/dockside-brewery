import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Slugify from "slugify"
import CloudinaryOptimize from "../helpers/cloudinaryOptimize"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
// import Hours from "../components/hours/Hours"

export default function BookAParty({ data }) {

  const partyRooms = [
    {
      name: "The Lodge",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
    {
      name: "The Upper Deck",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
    {
      name: "The Canopy",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
    {
      name: "The Lower Deck",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
    {
      name: "The Dirt Pit",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
    {
      name: "Juicy Beach",
      capacity: "XXXX",
      perfectFor:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis animi unde nobis nostrum tenetur dignissimos inventore soluta totam perferendis id quidem nihil suscipit perspiciatis natus, dicta quod iure nulla.",
    },
  ]

  const renderPartyRooms = () =>
    partyRooms.map(room => (
      <Content className="columns is-vcentered">
        <ColumnText className="column">
          <ContentTitle>{room.name}</ContentTitle>
          <ContentSubtitle>Capacity: {room.capacity}</ContentSubtitle>
          <ContentText>
            <ContentLabel>Perfect for: </ContentLabel>
            {room.perfectFor}
          </ContentText>
        </ColumnText>
        <ColumnImage className="column">
          <ContentImageContainer>
            <ContentImage
              src={cloudinaryOptimize(
                `https://res.cloudinary.com/gonation/image/upload/sites/dockside-brewing/${Slugify(
                  room.name,
                  { lower: true }
                )}.jpg`
              )}
              alt={room.name}
            />
          </ContentImageContainer>
        </ColumnImage>
      </Content>
    ))

  return (
    <Layout pageTitle="book a party">
      <Page className="section section__book-party">
        <Title>EXPLORE THE DOCKSIDE PARTY ROOMS</Title>
        <ContentContainer className="container">
          {renderPartyRooms()}
        </ContentContainer>
      </Page>
    </Layout>
  )
}

const Page = styled.div`
  p {
    font-weight: normal;
    line-height: 2rem;
  }
`

const Title = styled.h3`
  color: ${props => (props.theme.primary ? props.theme.primary : "black")};
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
`

const ContentContainer = styled.div``

// renderPartyRooms Styles

const ColumnImage = styled.div``
const ColumnText = styled.div``
const Content = styled.div`
  &:nth-of-type(odd) ${ColumnImage} {
    order: -1;
  }
`

const ContentImageContainer = styled.div``

const ContentImage = styled.img`
  border-radius: 13px;
`

const ContentTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: inherit;
  word-break: break-word;
  margin-bottom: 0.5rem;
`

const ContentSubtitle = styled.h4`
  color: #111;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  word-break: break-word;
`

const ContentText = styled.p``

const ContentLabel = styled.span`
  color: ${props => (props.theme.secondary ? props.theme.secondary : "black")};
  font-weight: bold;
  margin-right: 3px;
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
