import React, { useState, useEffect } from "react"
import { Box, Image, Flex, Button, Spinner } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"

export default function Album({ albumOpenID, backToAlbumView }) {
  const [albumData, setAlbumData] = useState({
    albums: null,
    isLoading: true,
  })

  const fetchData = async () => {
    await fetch(
      `https://www.gonation.com/api/proxy/v2/albums/${albumOpenID}/images`,
      {
        mode: "cors",
        Accept: "application/json",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAlbumData({ ...albumData, albums: data, isLoading: false })
      })
      .catch(e => {
        console.log("error : ", console.e)
        setAlbumData({ ...albumData, isLoading: false })
      })
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  return (
    <div>
      <button
        className="back-to-gallery-btn"
        onClick={() => {
          backToAlbumView()
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to Albums
      </button>
      <div className="album-container">
        {!albumData.isLoading ? (
          albumData.albums.items.map(({ cloudinaryId }) => (
            <img
              className="album-image"
              key={cloudinaryId}
              src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${cloudinaryId}`}
            />
          ))
        ) : (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}
