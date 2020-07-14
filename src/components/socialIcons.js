import React from "react"
import styled from "styled-components"
import Facebook from "./facebook"
import Instagram from "./instagram"
import Twitter from "./twitter"

const SocialRow = styled.div`
  display: flex;
  a {
    margin-left: 3rem;
  }
`

const SocialIcons = ({ links, iconWidth = '30px', iconFill="#fff" }) => {

  const getSocialIcon = social => {
    switch (social) {
      case "facebook":
        return <Facebook fill={iconFill} width={iconWidth} />
      case "instagram":
        return <Instagram fill={iconFill} width={iconWidth} />
      case "twitter":
        return <Twitter fill={iconFill} width={iconWidth} />
      default:
        return
    }
  }

  const renderSocialIcons = () => Object.keys(links).map(
      social =>
        links[social] && (
          <div>
            <a target="_blank" rel="noopener noreferrer" href={links[social]}>
              {getSocialIcon(social)}
            </a>
          </div>
        )
    )

  return (
    <SocialRow>
      {renderSocialIcons()}
    </SocialRow>
  )
}

export default SocialIcons
