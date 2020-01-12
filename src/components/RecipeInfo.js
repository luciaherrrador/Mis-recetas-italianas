import React from 'react';

const RecipeInfo = props => {
    console.log(props)
    return <div className="recipe-info-wrapper">
        <h1>{props.recipe.strMeal}</h1>
        <img src={props.recipe.strMealThumb} />
        <p>{props.recipe.strInstructions}</p>
    </div>
}
export default RecipeInfo;