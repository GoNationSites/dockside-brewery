import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"
import Pizza from "./pizza"
import moment from 'moment'
let jsonpAdapter = require("axios-jsonp")

const EventsShowcase = () => {
    const [regularEventData, setRegularEventData] = useState(null)
    const [recurringEventData, setRecurringEventData] = useState(null)
    const [allEvents, setAllEvents] = useState([])
    const [activeEvent, setActiveEvent] = useState({})
    
    const regularEventsURL = `https://data.prod.gonation.com/profile/events?profile_id=bzn-yO3xgUsKQCS7GWg0Q2ewbQ`
    const recurringEventsURL = `https://data.prod.gonation.com/profile/recurringevents?profile_id=bzn-yO3xgUsKQCS7GWg0Q2ewbQ`

    useEffect(() => {
        axios({
          url: regularEventsURL,
          adapter: jsonpAdapter,
        }).then(res => {
          setRegularEventData(res)
        })

        axios({
          url: recurringEventsURL,
          adapter: jsonpAdapter,
        }).then(res => {
          setRecurringEventData(res)
        })
    }, [])

    useEffect(() => {
        if(regularEventData && recurringEventData) {
            const regEvents = regularEventData.data.events
            console.log("EventsShowcase -> regEvents", regEvents)
            const recEvents = recurringEventData.data.events
            console.log("EventsShowcase -> recEvents", recEvents)

            setAllEvents(normalizeEvents(regEvents.concat(recEvents)))
            setActiveEvent(normalizeEvents(regEvents.concat(recEvents))[0])
        }
    }, [regularEventData, recurringEventData])

    const normalizeEvents = (events) => {
        console.log("normalizeEvents -> events", events)   
        return events.map(event => {
            if (event.eventDays) {
                return {
                    isRecurring: true,
                    createdAt: event.createdAt,
                    days: event.eventDays,
                    description: event.description,
                    tags: event.eventTags,
                    name: event.name,
                    starts: event.starts,
                    image: event.imageurl,
                    ctas: event.ctas,
                    profile_id: event.profile_id,
                    _id: event._id,
                }
            } else return {
                     isRecurring: false,
                     createdAt: event.createdAt,
                     description: event.description,
                     tags: event.eventTags,
                     name: event.name,
                     starts: event.starts,
                     image: event.imageurl,
                     ctas: event.ctas,
                     profile_id: event.profile_id,
                     _id: event._id,
                   }
        })
    }

    const getEventTime = (event) => {
        if(event.isRecurring) {
            const eventDays = Object.keys(event.days)
            return <h5 className="subtitle">Every {eventDays.map(day => day)}</h5>
        }
        return <h5 className="subtitle">{moment(event.starts).format('MMMM Do YYYY, h:mm a')}</h5>
    }

    const renderModule = () => {
        return (
          <>
            <h3 className="has-text-centered title">
              Never miss out on an event at Dockside
            </h3>
            <p className="has-text-centered subtitle">Live music, DJ's and more</p>
            <div className="active-event">
              <div className="columns is-marginless is-paddingless">
                <div className="column">
                  <div className="event-image">
                    <img src={activeEvent.image} alt={activeEvent.name} />
                  </div>
                </div>
                <div className="column">
                  <h4 className="title">{activeEvent.name}</h4>
                  {getEventTime(activeEvent)}

                  <p>{activeEvent.description}</p>
                  <div className="event-tags">
                    {activeEvent &&
                      activeEvent.tags &&
                      activeEvent.tags.map(tag => <span>{tag}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="non-active-events">
              <div className="columns is-mobile">
                {allEvents
                  .filter(
                    (event, idx) => event._id !== activeEvent._id && idx < 5
                  )
                  .map(event => (
                    <div className="column is-2-desktop" onClick={() => setActiveEvent(event)}>
                      <div className="event-module__image">
                        <img src={event.image} alt={event.name} />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="has-text-centered">
                  <Link className="button is-outlined is-white is-uppercase">View All Events</Link>
              </div>
            </div>
          </>
        )
    }

  return (
    <div className="container">
        {allEvents.length && renderModule()}
    </div>
  )
}

export default EventsShowcase
