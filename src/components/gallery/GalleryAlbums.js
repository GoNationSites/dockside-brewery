import React from "react"
import { Flex, Box, Heading } from "theme-ui"

export default function GalleryAlbums({ galleryData, setGalleryData }) {
  return (
    <div className="albums-container">
      {galleryData.albums.items.map(album => {
        const { id, name } = album.album
        const { images } = album

        return (
          <div
            className="album-cta"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${images[0].cloudinaryId}')`,
            }}
            key={id}
            onClick={() => setGalleryData({ ...galleryData, albumOpenID: id })}
          >
            <div className="album-title">{name}</div>
          </div>
        )
      })}
    </div>
  )
}
