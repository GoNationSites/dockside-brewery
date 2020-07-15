import React from 'react';
import slugify from 'slugify'
import cloudinaryOptimize from '../helpers/cloudinaryOptimize'

const Hero = ({pageTitle}) => {

    const heroStyle = {
      background: `url(${cloudinaryOptimize(`https://res.cloudinary.com/gonation/image/upload/v1/sites/dockside-brewing/${pageTitle}-hero.jpg`, 2000)}`
    }
     return (
      <section className="section section__hero" style={heroStyle}>
        <div className="container">
          <h1>{pageTitle}</h1>
        </div>
      </section>
    )
}

export default Hero;
