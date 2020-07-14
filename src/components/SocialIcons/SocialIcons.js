import React from "react"
import styled from "styled-components"
import Facebook from "../icons/Facebook"
import Instagram from "../icons/Instagram"
import Twitter from "../icons/Twitter"

export default function SocialIcons({ instagram, facebook, twitter }) {
  return (
    <SocialIconsContainer>
      <a href={facebook} target="_blank">
        <Facebook
          color={"#ffffff"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ marginRight: "10px" }}
        />
      </a>
      <a href={instagram} target="_blank">
        <Instagram
          color={"#ffffff"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ marginRight: "10px" }}
        />
      </a>
      <a href={twitter} target="_blank">
        <Twitter
          color={"#ffffff"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ marginRight: "10px" }}
        />
      </a>
    </SocialIconsContainer>
  )
}

const SocialIconsContainer = styled.div`
  margin: 1rem 0 1rem;
`
