import React from "react"
import styled from "styled-components"
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
        <TimeBlocks
          style={
            day.length > 1 || (day.length === 1 && timeBlock.label)
              ? { display: "flex", width: "100%" }
              : {}
          }
          key={"id" + Math.random().toString(16).slice(2)}
        >
          {/* if the business is closed render this */}
          {timeBlock.isClosed ? <span>Closed</span> : null}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen ? <span>Open 24 Hours</span> : null}

          {/* anything else render all hours and labels */}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <TimeBlock
              style={
                day.length > 1 || (day.length === 1 && timeBlock.label)
                  ? { display: "flex" }
                  : {}
              }
            >
              {timeBlock.label ? (
                <TimeLabel>
                  {timeBlock.label}
                  {timeBlock.label}
                </TimeLabel>
              ) : (
                ""
              )}
              <Time>
                {moment(timeBlock.open, "h:mm a").format("h:mm a")}-
                {moment(timeBlock.close, "h:mm a").format("h:mm a")}
              </Time>
            </TimeBlock>
          ) : (
            ""
          )}
        </TimeBlocks>
      )
    })

  return (
    <HoursBlock>
      <SectionTitle>Our Hours</SectionTitle>
      <HoursContainer className="hours-container">
        {daysOfWeek.map((day, index) => {
          return (
            <DayOfWeekContainer>
              <DayOfWeek>{dayOfTheWeekText[index]}</DayOfWeek>
              {renderHours(day)}
            </DayOfWeekContainer>
          )
        })}
      </HoursContainer>
    </HoursBlock>
  )
}

const HoursBlock = styled.div`
  padding: 1rem;
  background: white;
  > * {
    max-width: 400px;
    margin: 0 auto;
  }

  @media (min-width: 767px) {
    width: 50%;
    padding: 1rem;
  }
`
const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => (props.theme.secondary ? props.theme.secondary : "black")};
  margin-bottom: 1rem;
  text-align: center;
`
const HoursContainer = styled.div``

const DayOfWeekContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`
const DayOfWeek = styled.p`
  display: inline-block;
  text-transform: capitalize;
  &::first-letter {
    font-size: 150%;
    color: $secondary;
  }
`

const TimeBlocks = styled.div`
  display: inline-block;
  flex-direction: column;
  vertical-align: middle;
  text-align: right;
  flex-grow: 1;
`
const TimeBlock = styled.div`
  display: inline-block;
`
const TimeLabel = styled.span``

const Time = styled.span`
  flex-grow: 1;
  text-align: right;
`
