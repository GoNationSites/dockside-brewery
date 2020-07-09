import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import MobileLogo from "../../public/logo-white.png"
import Hamburger from "./hamburger"
import Close from "./close"
import Beer from "./beer"
import Hops from "./hops"
import Footer from "./Footer"
import DesktopShoutBanner from './DesktopShoutBanner'
import "../styles/index.scss"

const Layout = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
   const [navBackground, setNavBackground] = useState(false)
   const navRef = useRef()
   navRef.current = navBackground
   useEffect(() => {
     const handleScroll = () => {
       const show = window.scrollY > 70
       if (navRef.current !== show) {
         setNavBackground(show)
       }
     }
     document.addEventListener("scroll", handleScroll)
     return () => {
       document.removeEventListener("scroll", handleScroll)
     }
   }, [])

  return (
    <main>
      <DesktopShoutBanner />
      <header className={`${navBackground ? "scrolled" : ""}`}>
        <div className="header-left">
          <img src={MobileLogo} alt="" />
          {/* <a className="is-uppercase">Explore</a> */}
        </div>
        <div className="header-right">
          <nav className="nav__desktop">
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
                <Hops width="25px" fill="#fff" />{" "}
                <span style={{ marginLeft: "10px" }}>Book A Party</span>
              </Link>
            </div>
          </nav>
          <div
            className="hamburger-box is-hidden-desktop"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            {navIsOpen ? (
              <Close width="30px" fill="#fff" />
            ) : (
              <Hamburger fill="#fff" width="40px" />
            )}
          </div>
          <div className="cta-box">
            <span className="is-hidden-desktop">
              <Beer fill="#fff" width="30px" />
            </span>
            <span className="is-hidden-touch">
              <Beer fill="#fff" width="45px" />
            </span>
            <span className="is-uppercase">Reserve</span>
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
              <Beer width="30px" fill="#fff" />{" "}
              <span style={{ marginLeft: "10px" }}>Book A Party</span>
            </Link>
          </div>
        </nav>
      </div>

      {children}
      <Footer />
    </main>
  )
}

export default Layout
