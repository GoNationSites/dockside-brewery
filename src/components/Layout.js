import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import MobileLogo from "../../public/logo-white.png"
import Hamburger from "./hamburger"
import Close from "./close"
import Beer from "./beer"
import Hops from "./hops"
import Footer from "./Footer"
import DesktopShoutBanner from "./DesktopShoutBanner"
import Hero from "../components/Hero"
import "../styles/index.scss"

const Layout = ({ children, data, pageTitle }) => {
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
      <span className="is-hidden-touch">
        <DesktopShoutBanner />
      </span>

      <header className={`${navBackground ? "scrolled" : ""}`}>
        <div className="header-left">
          <Link to="/">
            <img src={MobileLogo} alt="Dockside Brewing" />
          </Link>
        </div>
        <div className="header-right">
          <nav className="nav__desktop is-hidden-touch">
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
              <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-link">
              <Link
                to="/reserve"
                style={{ display: "flex", alignItems: "center" }}
              >
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
          <Link to="/reserve" className="cta-box">
            <span className="is-hidden-desktop">
              <Beer fill="#fff" width="30px" />
            </span>
            <span className="is-hidden-touch">
              <Beer fill="#fff" width="45px" />
            </span>
            <span className="is-uppercase">Reserve</span>
          </Link>
        </div>
      </header>
      <div
        className={`is-hidden-desktop navigation-wrapper ${
          navIsOpen ? "" : "is-hidden-mobile"
        }`}
      >
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
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-link">
            <Link
              to="/reserve"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Beer width="30px" fill="#fff" />{" "}
              <span style={{ marginLeft: "10px" }}>Book A Party</span>
            </Link>
          </div>
        </nav>
      </div>

      {pageTitle !== "home" ? <Hero pageTitle={pageTitle} /> : ""}

      {children}

      {/* <Footer data={data} /> */}
    </main>
  )
}

export default Layout
