import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe_card}>
            <hr />
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <ul>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <img className={style.image}src={image} alt="" />
        </div>
    );
}

export default Recipe;