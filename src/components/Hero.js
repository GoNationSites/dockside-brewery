import React from 'react';

const Hero = ({pageTitle}) => {

    const heroStyle = {
      background: `url(https://res.cloudinary.com/gonation/image/upload/v1594395080/sites/dockside-brewing/food-hero.jpg)`,
      width: "100%",
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }


    return (
        <section className="section section__hero" style={heroStyle}>
            <div className="container">
            <h1>{pageTitle}</h1>
            </div>
        </section>
    );
}

export default Hero;
