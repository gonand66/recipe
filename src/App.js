import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "a16bea31";
  const APP_KEY = "d06004cefa87ee44fa17e63a8f58270a";

  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSearch(type);
  };

  return (
    <div className="App">
      <form className="search_form" onSubmit={getSearch}>
        <input
          type="text"
          className="search_bar"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <button className="search_btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            imgUrl={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
