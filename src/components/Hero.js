import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import cloudinaryOptimize from "../helpers/cloudinaryOptimize"

const Hero = ({ pageTitle }) => {
  return (
    <HeroContainer
      style={{
        backgroundImage: `url(${cloudinaryOptimize(
          `https://res.cloudinary.com/gonation/image/upload/v1/sites/dockside-brewing/${pageTitle}-hero.jpg`,
          2000
        )}`,
      }}
    >
      <div className="container">
        <PageTitle>{pageTitle}</PageTitle>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  height: 500px;
  display: flex;
  width: 100%;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem 1.5rem;
  width: 100%;
  @media min-width(1024px) {
    height: 700px;
  }
`

const PageTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  @media min-width(1024px) {
    font-size: 3.5rem;
  }
`

export default Hero
