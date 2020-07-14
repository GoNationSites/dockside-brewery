import React, { useState} from "react"
import Layout from "../components/Layout"
import Slugify from 'slugify'
import CloudinaryOptimize from '../helpers/cloudinaryOptimize'
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
// import Hours from "../components/hours/Hours"

export default function BookAParty({ data }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const siteData = data.siteMetaData
  const bizID = data.siteMetaData.bizID

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

  const renderPartyRooms = () => partyRooms.map(room => (
      <div className="columns is-vcentered">
          <div className="column">
              <div className="party-room-content">
                <h2 className="title">{room.name}</h2>
                <h4 className="subtitle">Capacity: {room.capacity}</h4>
                <p><span className="has-text-weight-bold">Perfect for: </span>{room.perfectFor}</p>
              </div>
          </div>
          <div className="column column__party-text">
              <div className="party-room-image">
                  <img src={cloudinaryOptimize(`https://res.cloudinary.com/gonation/image/upload/sites/dockside-brewing/${Slugify(room.name, {lower: true})}.jpg`)} alt={room.name}/>
              </div>
          </div>
      </div>
  ))


  return (
    <Layout pageTitle="book a party" data={siteData}>
      <section className="section section__book-party">
        <h3 className="title has-text-centered title__party">
          EXPLORE THE DOCKSIDE PARTY ROOMS
        </h3>
        <div className="container">
          {renderPartyRooms()}
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

