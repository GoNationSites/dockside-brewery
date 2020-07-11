/** @jsx jsx */
import React, { useState, useEffect } from "react"
import formatTime from "../helpers/formatTime"
import dayLookup from "../helpers/dayLookup"
import checkIfSequence from "../helpers/checkIfSequence"
import { jsx, Styled } from "theme-ui"
import { Box, Text, Flex } from "@theme-ui/components"
// import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'

const Hours = ({ hours }) => {
  const [formattedHours, setFormattedHours] = useState([])

  const days = Object.keys(hours)

  // gets all unique hour labels
  const hourLabels = () => {
    const labels = []
    days.forEach(day => {
      hours[day].forEach(hour => {
        if (!labels.includes(hour.name)) {
          labels.push(hour.name)
        }
      })
    })
    return labels
  }

  // @param String of an hour label. Returns hours for only the given label
  const renderHoursForLabel = label => {
    return days.map((day, idxDay) => {
      return hours[day]
        .filter((el, p) => el.name === label)
        .map((hour, idxHour) => {
          hour.day = day
          return hour
        })
    })
  }

  // takes the hour data and formats it in an array of object that combines similar hours
  const buildSimilarData = () => {
    const hourArr = []

    // initialize the array of objects by setting each object the key of hour label
    hourLabels().map(label => {
      const obj = {}
      obj[label] = {}
      hourArr.push(obj)
    })

    // @param given label, populate each label object with hour data
    const fillHourBlockWithContent = label => {
      const hourLabel = Object.keys(label) ? Object.keys(label)[0] : "hours"
      const hours = renderHoursForLabel(hourLabel)

      const pushNewHour = hour => {
        label[hourLabel].push({
          days: [hour.day],
          open: hour.open,
          close: hour.close,
        })
      }

      // check if label hour has matching time. if so, just add the day, else make a new block
      hours.forEach(hourObj => {
        const hour = hourObj[0]
        if (hour !== undefined && Object.keys(label[hourLabel]).length === 0) {
          label[hourLabel] = []
          pushNewHour(hour)
        } else if (hour !== undefined) {
          if (
            label[hourLabel].length > 1 &&
            label[hourLabel].some(e => {
              return e.open === hour.open && e.close === hour.close
            })
          ) {
            label[hourLabel].forEach(pushedHour => {
              if (
                pushedHour.open + pushedHour.close ===
                hour.open + hour.close
              ) {
                pushedHour.days.push(hour.day)
              }
            })
          } else {
            pushNewHour(hour)
          }
        }
      })
    }

    // Do the above function for EVERY label
    hourArr.forEach(label => {
      fillHourBlockWithContent(label)
    })
    // Finally, set formattedHours = the returned value
    setFormattedHours(hourArr)
  }

  useEffect(() => {
    buildSimilarData()
  }, [])

  // Decide how to print the days. (day & day), (day - day), (day, day, day) etc.
  const formatDays = days => {
    const lengthOfDays = days.length
    if (lengthOfDays === 1) {
      return dayLookup[days[0]].fullDay
    } else if (lengthOfDays === 2) {
      const dayString = days.map(day => dayLookup[day].fullDay)
      return dayString.join(" & ")
    } else {
      const dayAsKeys = days.map(day => dayLookup[day].key)
      if (checkIfSequence(dayAsKeys)) {
        const dayString = `${dayLookup[days[0]].fullDay} - ${
          dayLookup[days[days.length - 1]].fullDay
        }`
        return dayString
      } else {
        const dayString = days.map(day => dayLookup[day].fullDay)
        return dayString.join(", ")
      }
    }
  }

  return (
    <div className="hours-block">
      <h2 className="title">Hours</h2>

      <div>
        {formattedHours.map((hourBlock, idx) => (
          <div key={`${idx}-${Object.keys(hourBlock)}`}>
            <p>{Object.keys(hourBlock)}</p>

            {hourBlock[Object.keys(hourBlock)].map((el, idx) => (
              <div key={`${el.open} - ${idx}`}>
                <div>
                  <div>{formatDays(el.days)}</div>

                  <div>
                    {formatTime(el.open)} - {formatTime(el.close)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hours
