import React from "react"
import { Box, Text } from "theme-ui"
import moment from "moment"
export default function EventDate({ date }) {
  return (
    <div className="eventitemdatecontainer">
      <p className="eventdate">{`${moment(date).format("DD")}`}</p>
      <p className="eventmonth">{`${moment(date).format("MMM")}`}</p>
    </div>
  )
}
