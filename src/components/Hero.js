import React from 'react';
import slugify from 'slugify'

const Hero = ({pageTitle}) => {

    const getLink = () => {
        switch(pageTitle) {
            case 'food': 
                return `url(https://res.cloudinary.com/gonation/image/upload/w_2000/v1594395080/sites/dockside-brewing/food-hero.jpg)`
            case 'faq': 
                return `url(https://res.cloudinary.com/gonation/image/upload/v1594397872/sites/dockside-brewing/faq-hero.jpg)`
        }
    }

    const heroStyle = {
      //   background: `url(https://res.cloudinary.com/gonation/image/upload/v1/sites/dockside-brewing/${slugify(
      //     pageTitle,
      //     { lower: true }
      //   )}-hero.jpg)`,
      background: `url(https://res.cloudinary.com/gonation/image/upload/v1/sites/dockside-brewing/${pageTitle}-hero.jpg)`,
      width: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
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
