import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Restaurant from './components/Restaurant/Restaurant';
import "./App.scss"

function App() {
  const [restaurants, setRestaurants] = useState([]);
  
  return (
    <div className="restaurants">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants} />
      {restaurants.map(rt => <Restaurant key={rt.id} restaurant={rt} />)}
    </div>
  );
}

export default App;
