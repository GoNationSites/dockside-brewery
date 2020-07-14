import React, { useEffect, useState } from "react"
import { Spinner } from "theme-ui"
import styled from "styled-components"
import GalleryAlbums from "./GalleryAlbums"
import Album from "./Album"

export default function Gallery(props) {
  const [galleryData, setGalleryData] = useState({
    albums: null,
    isLoading: true,
    albumOpenID: "",
  })

  console.log(props)

  const id = "bzn-yO3xgUsKQCS7GWg0Q2ewbQ"

  // fetch data from gonation and sets it to component state.
  const fetchData = async () => {
    await fetch(
      `https://www.gonation.com/api/proxy/v2/businesses/${id}/albums`,
      {
        mode: "cors",
        Accept: "application/json",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .then(data =>
        setGalleryData({ ...galleryData, albums: data, isLoading: false })
      )
      .catch(e => {
        console.log("error : ", console.e)
        setGalleryData({ ...galleryData, isLoading: false })
      })
  }

  // back button to return to album view
  const backToAlbumView = () =>
    setGalleryData({ ...galleryData, albumOpenID: "" })

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  return (
    <Wrapper>
      {/*  if data has arrived then load else show loading*/}
      {!galleryData.isLoading ? (
        <>
          {galleryData.albums.items.length ? (
            <>
              {/* <h1 className="page-title">Our Gallery</h1> */}

              {/*  if No album is open, load the grid of albums. if one is open load that album */}
              {!galleryData.albumOpenID ? (
                <GalleryAlbums
                  galleryData={galleryData}
                  setGalleryData={setGalleryData}
                />
              ) : (
                <Album
                  albumOpenID={galleryData.albumOpenID}
                  backToAlbumView={backToAlbumView}
                />
              )}
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Wrapper>
  )
}

// styled components

const Wrapper = styled.section`
  background-color: ${props =>
    props.theme.light ? props.theme.light : "grey"};
  font-family: ${props =>
    props.theme.fonts ? props.theme.fonts.bodyFont : "Arial, sans-serif"};
  padding: ${props => (props.theme.sizes ? props.theme.sizes.M : "1rem")};
`

const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
`
