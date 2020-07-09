import React from "react"
import { Link } from "gatsby"
import Compass from "./compass"
import Table from "./table"
import Phone from "./phone"
import Beer from "./beer"
import Twitter from './twitter'
import Facebook from './facebook'
import Instagram from './instagram'
import Logo from '../../public/footer-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-details">
        <div className="columns">
          <div className="column has-text-centered">
            <Phone />
            <h5 className="subtitle">Call Us</h5>
            <p>Some text here</p>
          </div>
          <div className="column has-text-centered">
            <Compass />
            <h5 className="subtitle">Visit Us</h5>
            <p>Some text here</p>
          </div>
          <div className="column has-text-centered">
            <Table />
            <h5 className="subtitle">Book a table</h5>
            <p>Some text here</p>
          </div>
          <div className="column has-text-centered">
            <Beer width="40px" fill="#fff" />
            <h5 className="subtitle">Join The Club</h5>
            <p>Some text here</p>
          </div>
        </div>
      </div>
      <div className="footer-map">
        <div className="footer-link">
          <Link>Home</Link>
        </div>
        <div className="footer-link">
          <Link>About</Link>
        </div>
        <div className="footer-link">
          <Link>Brewery</Link>
        </div>
        <div className="footer-link">
          <Link>Food</Link>
        </div>
        <div className="footer-link">
          <Link>Beer</Link>
        </div>
        <div className="footer-link">
          <Link>Events</Link>
        </div>
        <div className="footer-link">
          <Link>Gallery</Link>
        </div>
        <div className="footer-link">
          <Link>Contact</Link>
        </div>
        <div className="footer-link">
          <Link>
            <span>Book A Party</span>
          </Link>
        </div>
      </div>
      <h3 className="has-text-centered title social-title">Connect</h3>
      <div className="footer-social">
        <div>
          <Facebook width="20px" />
        </div>
        <div>
          <Instagram width="20px" />
        </div>
        <div>
          <Twitter width="20px" />
        </div>
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="Dockside" />
      </div>
      <div className="gonation">
        <img
          src="https://www.gonationsites.com/GNSE/gn-sites/images/gn-power-black.svg"
          alt=""
        />
      </div>
    </footer>
  )
}

export default Footer