import React, {useState} from 'react';
import {Link} from 'gatsby'
import MobileLogo from '../../public/logo-white.png'
import Hamburger from './hamburger'
import Close from './close'
import Beer from './beer'
import "../styles/index.scss"

const Layout = ({children}) => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    return (
      <main>
        <header>
          <div className="header-left">
            <img src={MobileLogo} alt="" />
            {/* <a className="is-uppercase">Explore</a> */}
          </div>
          <div className="header-right">
            <div
              className="hamburger-box"
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              {navIsOpen ? (
                <Close width="30px" fill="#fff" />
              ) : (
                <Hamburger fill="#fff" width="40px" />
              )}
            </div>
            <div className="cta-box">
              <span className="is-uppercase">Reserve</span>
              <Beer fill="#fff" width="30px" />
            </div>
          </div>
        </header>
        <div
          className={`is-hidden-desktop navigation-wrapper ${
            navIsOpen ? "" : "is-hidden-mobile"
          }`}
        >
          <nav className={``}>
            <div className="nav-link">
              <Link>Home</Link>
            </div>
            <div className="nav-link">
              <Link>About</Link>
            </div>
            <div className="nav-link">
              <Link>Brewery</Link>
            </div>
            <div className="nav-link">
              <Link>Food</Link>
            </div>
            <div className="nav-link">
              <Link>Beer</Link>
            </div>
            <div className="nav-link">
              <Link>Events</Link>
            </div>
            <div className="nav-link">
              <Link>Gallery</Link>
            </div>
            <div className="nav-link">
              <Link>Contact</Link>
            </div>
            <div className="nav-link">
              <Link style={{ display: "flex", alignItems: "center" }}>
                <Beer width="30px" fill="#fff" /> <span style={{marginLeft: '10px'}}>Book A Party</span>
              </Link>
            </div>
          </nav>
        </div>

        {children}
      </main>
    )
}

export default Layout;
