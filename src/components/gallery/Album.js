import React, { useState, useEffect } from "react"
import { Spinner } from "theme-ui"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"
import { theme } from "../../globalStyles"

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
      <BackToGallery
        className="back-to-gallery-btn"
        onClick={() => {
          backToAlbumView()
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to Albums
      </BackToGallery>
      <AlbumContainer>
        {!albumData.isLoading ? (
          albumData.albums.items.map(({ cloudinaryId }) => (
            <AlbumImage
              key={cloudinaryId}
              src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${cloudinaryId}`}
            />
          ))
        ) : (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
      </AlbumContainer>
    </div>
  )
}

// styled components

const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const BackToGallery = styled.button`
  background-color: ${props =>
    props.theme.secondary ? props.theme.secondary : "rgb(202, 54, 37)"};
  color: white;
  border: none;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`

const AlbumContainer = styled.div`
  flex-wrap: wrap;
  align-items: stretch;
  margin: 1rem auto;
  justify-content: center;
`
const AlbumImage = styled.img`
  width: 50%;
  object-fit: cover;
  height: 200px;
  padding: 4px;
  @media (min-width: 480px) {
    width: calc(33.33% - (0.5rem * 2));
    margin: 0.5rem;
  }

  @media (min-width: 767px) {
    width: calc(25% - (0.5rem * 2));
    margin: 0.5rem;
  }
  @media (min-width: 1200px) {
    width: calc(20% - (0.5rem * 2));
    margin: 0.5rem;
  }
`
