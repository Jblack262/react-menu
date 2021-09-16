import React from 'react'

function menuItem({item}) {
  const {title, price, image, desc} = item;
  return (
    <div className="menuItem">
      <div className="imageContainer">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="header">
          <h3>{title.toUpperCase()}</h3>
          <p>${price}</p>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default menuItem
