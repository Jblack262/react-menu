import React from 'react';

import MenuItem from './menuItem';

import menu from '../util/data';

function menuContainer() {
  console.log(menu);
  return (
    <div className="menuContainer">
      {menu.map((item) => {
        return (
          <MenuItem item={item}/>
        )
      })}
    </div>
  )
}

export default menuContainer
