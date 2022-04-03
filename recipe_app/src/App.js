import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./recipe";


const App = () => {
  const APP_ID = "b0269929";
  const APP_KEY = "81b233b54c456e1665585bed83b8d444";
  // our variables
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('chicken');
  // useState
  useEffect ( () => {
    getRecipes();
  }, [query]);

  // our queries
  async function getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    // any external request that you're fetching will have to be made with async await
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = event => {
  setSearch(event.target.value)
  console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

// start of our html form and list rendering
  return (
    <div className="App">

      {/* search bar start */}
      <h1>Sal's Easy recipes search</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
        className="search-bar"
        type="text" value={search}
        onChange={updateSearch}/>
        <button
        className="search-button"
        type="submit">
          Search
        </button>
      </form>
      {/* search bar end */}

      {/* recipe component */}
      <div className="recipe_card">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      
    </div>
  );
};

export default App;