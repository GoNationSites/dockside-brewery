import React from 'react';
import {Link} from 'gatsby'
import LogoGirl from "../assets/white-logo-girl.png"

const Navigation = ({wrapperClass, isMobile}) => {
    if(isMobile) {
        return (
          <nav className={``}>
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/about">About</Link>
            </div>
            <div className="nav-link">
              <Link to="/brewery">Brewery</Link>
            </div>
            <div className="nav-link">
              <Link to="/food">Food</Link>
            </div>
            <div className="nav-link">
              <Link to="/drinks">Drink</Link>
            </div>
            <div className="nav-link">
              <Link to="/events">Events</Link>
            </div>
            <div className="nav-link">
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className="nav-link">
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="nav-link">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-link">
              <Link
                to="/book-a-party"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span>Book A Party</span>
              </Link>
            </div>
            <div className="mobile-nav-logo">
              <img src={LogoGirl} alt="Dockside Brewing logo girl" />
            </div>
          </nav>
        )
    }
    return (
      <nav className={wrapperClass}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-link">
          <Link to="/brewery">Brewery</Link>
        </div>
        <div className="nav-link">
          <Link to="/food">Food</Link>
        </div>
        <div className="nav-link">
          <Link to="/drinks">Drink</Link>
        </div>
        <div className="nav-link">
          <Link to="/events">Events</Link>
        </div>
        <div className="nav-link">
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="nav-link">
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-link">
          <Link
            to="/book-a-party"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>Book A Party</span>
          </Link>
        </div>
      </nav>
    )
}

export default Navigation;
