import React from "react";
import "./recipe.css"

function Recipe({ title, cal, imgUrl,ingredients}) {
  return (
    <div className="recipebox">
      <h1 >{title}</h1>
      <p>Calories = {cal}</p>
      <ol>
          {ingredients.map(ingredient=>(
              <li>{ingredient.text}</li>
          ))}
      </ol>
      <img src={imgUrl} alt={title} />
    </div>
  );
}

export default Recipe;
