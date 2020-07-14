import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import MobileLogo from "../assets/logo-white.png"
import LogoMobile from "../assets/logo-girl.png"
import LogoGirl from "../assets/white-logo-girl.png"
import M41 from "./icons/M41"
import Hamburger from "../components/hamburger"
import Close from "../components/close"
import Footer from "./Footer"
import DesktopShoutBanner from "./DesktopShoutBanner"
import Hero from "../components/Hero"
import "../styles/index.scss"

const Layout = ({ children, data, pageTitle }) => {
  const [navBackground, setNavBackground] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
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
          <span className="is-hidden-touch">
            <Link to="/">
              <img src={MobileLogo} alt="Dockside Brewing" />
            </Link>
          </span>

          {/* <span className="is-hidden-desktop"> */}
          <Link to="/" className="is-hidden-desktop">
            <img src={LogoMobile} alt="Dockside Brewing" />
          </Link>
          {/* </span> */}
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
          <Link to="/reserve" className="cta-box">
            {/* <span className="is-hidden-desktop">
              <M41 fill="#fff" width="41px" />
            </span>
            <span className="is-hidden-touch">
              <M41 fill="#fff" width="41px" />
            </span> */}
            <span className="is-uppercase">Reserve Table</span>
          </Link>
        </div>
      </header>
      <div
        className={`is-hidden-desktop navigation-wrapper ${
          navIsOpen ? "" : "is-hidden-mobile is-hidden-tablet"
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
      </div>

      <section className="section section-call-dir is-hidden-desktop">
        <div className="columns is-mobile is-hidden-tablet is-vcentered">
          <div className="column has-text-centered">
            <a>Call</a>
          </div>
          <div className="column has-text-centered">
            <a>Directions</a>
          </div>
          <div className="column has-text-centered">
            <a>Reserve</a>
          </div>
          <div className="column has-text-centered column__center">
            <div
              className="hamburger-box is-hidden-desktop"
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              {navIsOpen ? (
                <Close width="20px" fill="#fff" />
              ) : (
                <Hamburger fill="#fff" width="20px" />
              )}
            </div>
          </div>
        </div>
      </section>

      {pageTitle !== "home" ? <Hero pageTitle={pageTitle} /> : ""}

      {children}

      <Footer data={data} />
    </main>
  )
}

export default Layout
