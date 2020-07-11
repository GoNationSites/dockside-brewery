import React from "react"
import { Box, Flex, Text } from "theme-ui"
import moment from "moment"

export default function hours({ hours }) {
  console.log(hours)
  const { mon, tue, wed, thu, fri, sat, sun } = hours

  // put all variables into an array for looping through
  const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]

  // no day name in the object that coems through. needed to renfder text of the day.
  const dayOfTheWeekText = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]

  const renderHours = day =>
    day.map(timeBlock => {
      const labeltest = ""
      return (
        <div
          style={
            day.length > 1 || (day.length === 1 && timeBlock.label)
              ? { display: "flex", width: "100%" }
              : {}
          }
          className="timeblocks"
          key={"id" + Math.random().toString(16).slice(2)}
        >
          {/* if the business is closed render this */}
          {timeBlock.isClosed ? <span>Closed</span> : null}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen ? <span>Open 24 Hours</span> : null}

          {/* anything else render all hours and labels */}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <div
              className={`timeblock ${
                day.length > 1 || (day.length === 1 && timeBlock.label)
                  ? "variants"
                  : ""
              }`}
            >
              {timeBlock.label ? (
                <span className="timelabel">
                  {timeBlock.label}
                  {timeBlock.label}
                </span>
              ) : (
                ""
              )}
              <span className="time">
                {moment(timeBlock.open, "h:mm a").format("h:mm a")}-
                {moment(timeBlock.close, "h:mm a").format("h:mm a")}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      )
    })

  return (
    <div className="hours-block">
      {console.log(hours)}
      <h3 className="title">Our Hours</h3>
      <div className="hours-container">
        {daysOfWeek.map((day, index) => {
          return (
            <div className="dayofweekcontainer">
              <p className="dayofweek">{dayOfTheWeekText[index]}</p>
              {renderHours(day)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
