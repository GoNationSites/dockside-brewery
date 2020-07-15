import React from "react"
import styled from "styled-components"
import slugify from "slugify"

const Hero = ({ pageTitle }) => {
  const getLink = () => {
    switch (pageTitle) {
      case "food":
        return `url(https://res.cloudinary.com/gonation/image/upload/w_2000/v1594395080/sites/dockside-brewing/food-hero.jpg)`
      case "faq":
        return `url(https://res.cloudinary.com/gonation/image/upload/v1594397872/sites/dockside-brewing/faq-hero.jpg)`
    }
  }

  return (
    <HeroContainer
      backgroundImage={`url(https://res.cloudinary.com/gonation/image/upload/v1/sites/dockside-brewing/${pageTitle}-hero.jpg)`}
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
  background-image: ${props =>
    props.backgroundImage ? props.backgroundImage : ""};
  background-color: ${props => (!props.backgroundImage ? "lightgrey" : "")};
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
