import React from "react"
import moment from "moment"
import { Box, Image, Flex, Heading, Text, Button } from "theme-ui"
import EventDate from "./EventDate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlassCheers,
  faCalendarWeek,
  faClock,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"

export default function EventsModal({ event, modalShowing, closeModal, slug }) {
  const { _id, name, starts, ends, description, imageurl } = event

  return modalShowing ? (
    <div className="modalcontainer">
      <div className="modalbackground" onClick={() => closeModal()} />
      <div className="modal">
        <img className="modalimage" src={imageurl} />

        <div className="modalcontentcontainer">
          <p className="modaleventname">
            <FontAwesomeIcon
              style={{
                marginRight: "7px",
                marginTop: "5px",
              }}
              icon={faGlassCheers}
            />{" "}
            {name}
          </p>

          <div className="modaleventdate">
            <FontAwesomeIcon
              style={{
                marginRight: "10px",
                marginLeft: "2px",
                fontSize: "22px",
              }}
              icon={faCalendarWeek}
            />

            <EventDate date={starts} />
            <h4 style={{ marginRight: 2, marginLeft: 2, color: "light" }}>-</h4>
            <EventDate date={ends} />
          </div>

          <p className="modaleventtime">
            <FontAwesomeIcon
              style={{ marginRight: "10px", fontSize: "22px" }}
              icon={faClock}
            />
            {`${moment(starts).format("HH:mm")}`} -{" "}
            {`${moment(ends).format("HH:mm")}`}
          </p>

          <div className="descriptioncontainer">
            <FontAwesomeIcon
              style={{
                marginRight: "14px",
                fontSize: "22px",
                marginLeft: "2px",
              }}
              icon={faClipboard}
            />
            <p className="">{description.substring(0, 125)}...</p>
          </div>

          <a href={`https://www.gonation.com/place/${slug}/events/${_id}`}>
            <button className="eventmodalbutton">See Full Details</button>
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  )
}
