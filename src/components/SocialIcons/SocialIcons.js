import React from "react"
import { Text } from "theme-ui"
import Facebook from "../icons/Facebook"
import Instagram from "../icons/Instagram"
import Twitter from "../icons/Twitter"

export default function SocialIcons({ instagram, facebook, twitter }) {
  return (
    <div>
      <a href={facebook} target="_blank">
        <Facebook
          color={"#00567d"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ margin: "10px" }}
        />
      </a>
      <a href={instagram} target="_blank">
        <Instagram
          color={"#00567d"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ margin: "10px" }}
        />
      </a>
      <a href={twitter} target="_blank">
        <Twitter
          color={"#00567d"} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
          height={"30px"}
          width={"30px"}
          style={{ margin: "10px" }}
        />
      </a>
    </div>
  )
}
