import { React, useState } from 'react';

import {data} from './util/data';
import MenuItem from './components/menuItem';

function App() {
  const [menu, setMenu] = useState(data);

  const filterData = (description) => {
    let newMenu = data.filter(item => item.category === description);
    !description ? setMenu(data) : setMenu(newMenu);
    // console.log(newMenu)
  }
  return (
    <div className="App">
      <h1 className="title">Our Menu</h1>
      <div className="navigation">
        <button onClick={() => filterData()} className="btn">All</button>
        <button onClick={() => filterData("breakfast")} className="btn">Breakfast</button>
        <button onClick={() => filterData("lunch")} className="btn">Lunch</button>
        <button onClick={() => filterData("shakes")} className="btn">Shakes</button>
      </div>
      <div className="menuContainer">
        {menu.map(item => {
          return (
            <MenuItem key={item.id} item={item}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
