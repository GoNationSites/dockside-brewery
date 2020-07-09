import React from "react"

const MenuCell = ({ onCellClick, section, inventory, numSections }) => {
  const defaultCellBG =
    "https://res.cloudinary.com/gonation/gonation.data.prod/default/img-sec-cover-full.png"

  const blockStyle = {
    background:
      section.imageUrl === defaultCellBG ? "" : `url${section.imageUrl}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <div
      className={`section-cell`}
      onClick={onCellClick({ section, inventory })}
    >
      <div className={`gn-menu-cell`} style={blockStyle}>
        <div className="image-container">
          <div className="image-fill"></div>
          <img src={section.imageUrl} />
        </div>
        <h2 className="gn-menu-cell__name">{section.name}</h2>
      </div>
    </div>
  )
}

export default MenuCell
