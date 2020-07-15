import React, { useState, useEffect, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MobileLogo from "../assets/logo-white.png"
import LogoMobile from "../assets/logo-girl.png"
import Hamburger from "../components/hamburger"
import Close from "../components/close"
import Footer from "./Footer"
import DesktopShoutBanner from "./DesktopShoutBanner"
import Hero from "./Hero"
import Navigation from "./Navigation"
import SEO from './SEO'
import "../styles/index.scss"

const Layout = ({ children, pageTitle, hasTopShoutBanner = false }) => {
  const {siteMetaData} = useStaticQuery(graphql`
    query LayoutQuery {
      siteMetaData {
        city
        cover {
          imageBaseUrl
          imagePrefix
          isDefault
        }
        avatar {
          isDefault
          imagePrefix
          imageBaseUrl
        }
        desc
        links {
          facebook
          instagram
          twitter
          website
          youtube
        }
        loc
        name
        phone
        slug
        state
        street
        zip
      }
    }
  `)

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

  const renderShoutBanner = () => (
    <span className="is-hidden-touch">
      <DesktopShoutBanner />
    </span>
  )

  return (
    <>
      <SEO siteMetaData={siteMetaData} pageTitle={pageTitle} />

      <main>
        {hasTopShoutBanner && renderShoutBanner()}

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
            <Navigation wrapperClass="nav__desktop is-hidden-touch" />
            <Link to="/reserve" className="cta-box">
              <span className="is-uppercase">Reserve Table</span>
            </Link>
          </div>
        </header>
        <div
          className={`is-hidden-desktop navigation-wrapper ${
            navIsOpen ? "" : "is-hidden-mobile is-hidden-tablet"
          }`}
        >
          <Navigation isMobile />
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

        <Footer data={siteMetaData} />
      </main>
      </>
  )
}

export default Layout
