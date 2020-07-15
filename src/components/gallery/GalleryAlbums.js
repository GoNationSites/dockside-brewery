import React from "react"
import styled from "styled-components"
export default function GalleryAlbums({ galleryData, setGalleryData }) {
  return (
    <AlbumsContainer>
      {galleryData.albums.items.map(album => {
        const { id, name } = album.album
        const { images } = album

        return (
          <AlbumCTA
            backgroundImage={`url('https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${images[0].cloudinaryId}')`}
            key={id}
            onClick={() => setGalleryData({ ...galleryData, albumOpenID: id })}
          >
            <AlbumTitle>{name}</AlbumTitle>
          </AlbumCTA>
        )
      })}
    </AlbumsContainer>
  )
}

// styled components

const AlbumsContainer = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`

const AlbumCTA = styled.div`
  width: 100%;
  margin: 0;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : ""};
  background-color: ${({ backgroundImage }) =>
    backgroundImage ? "" : "black"};
  margin-bottom: 2%;
  height: 300px;
  cursor: pointer;
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (min-width: 480px) {
    width: 48%;
    margin: 1%;
    margin-bottom: 1%;
  }
  @media (min-width: 767px) {
    width: 23%;
  }
`

const AlbumTitle = styled.div`
  color: white;
  text-shadow: 2px 2px black;
  font-size: 1.5rem;
`
