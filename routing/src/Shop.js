import React, { useState, useEffect } from 'react';
import './App.css';


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems =  async () => {
    const data = await fetch('https://fortnite4.p.rapidapi.com/items/all'
    );
    const items = await data.json();
    console.log(data);
    setItems(items);
  }

  return (
    <div className="App">
      {items.map(item => (
        <h2>{item.name}</h2>
      ))}
      
    </div>
  );
}

export default Shop;
