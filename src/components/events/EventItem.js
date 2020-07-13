/** @jsx jsx */
import React from "react"
import { jsx, Box, Image, Flex, Text, Button } from "theme-ui"
import EventsModal from "./EventsModal"
import EventDate from "./EventDate"

export default function EventItem({
  event,
  setEvents,
  closeModal,
  state,
  slug,
}) {
  const { _id, name, starts, ends, description, imageurl } = event

  return (
    <div key={_id} className="eventitemcontainer">
      <img className="eventitemimage" src={imageurl} />
      <div className="eventitemcontent">
        <EventDate date={starts} />
        <div>
          <h3 className="eventitemtitle">{name}</h3>
        </div>
      </div>
      <button
        className="eventmodalbutton"
        onClick={() => {
          setEvents({ ...state, modalShowing: _id })
        }}
      >
        See More
      </button>

      <EventsModal
        slug={slug}
        event={event}
        modalShowing={_id === state.modalShowing}
        closeModal={closeModal}
      />
    </div>
  )
}
