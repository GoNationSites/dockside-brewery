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
      return (
        <Flex key={"id" + Math.random().toString(16).slice(2)}>
          {/* if the business is closed render this */}
          {timeBlock.isClosed ? (
            <Text
              variant="light"
              sx={{
                flexGrow: "1",
                marginBottom: 0,
                fontSize: 1,
                textAlign: "right",
              }}
            >
              Closed
            </Text>
          ) : null}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen ? (
            <Text
              variant="light"
              sx={{
                flexGrow: "1",
                marginBottom: 0,
                fontSize: 1,
                textAlign: "right",
              }}
            >
              Open 24 Hours
            </Text>
          ) : null}

          {/* anything else render all hours and labels */}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <Flex
              sx={{
                width: "100%",
                flexDirection: ["row", "row", "row"],
                marginBottom: 0,
              }}
            >
              <Text
                variant="light"
                sx={{ flexGrow: "1", marginBottom: 0, fontSize: 1 }}
              >
                {timeBlock.label}
              </Text>
              <Text
                variant="light"
                sx={{
                  textAlign: "right",
                  marginBottom: 0,
                  fontSize: 1,
                }}
              >
                {moment(timeBlock.open, "h:mm a").format("h:mm a")}-
                {moment(timeBlock.close, "h:mm a").format("h:mm a")}
              </Text>
            </Flex>
          ) : (
            ""
          )}
        </Flex>
      )
    })

  return (
    <Box sx={{ maxWidth: "300px", width: "100%" }}>
      {console.log(hours)}
      <Text
        variant="h2"
        sx={{
          textAlign: ["center", "center", "left"],
          marginBottom: 2,
          color: "light",
        }}
      >
        {" "}
        Our Hours
      </Text>
      <Flex
        sx={{
          flexDirection: ["column"],
          justifyContent: "space-between",
        }}
      >
        {daysOfWeek.map((day, index) => {
          return (
            <Box
              key={index}
              sx={{
                padding: 1,
                textAlign: ["left", "left", "left"],
                marginBottom: 2,
              }}
            >
              <Text
                variant="headingLight"
                sx={{
                  marginBottom: 1,
                  textTransform: "uppercase",
                  fontSize: 2,
                }}
              >
                {dayOfTheWeekText[index]}
              </Text>
              {renderHours(day)}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
