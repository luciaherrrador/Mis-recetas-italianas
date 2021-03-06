import React from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom'

const RecipeList = props => {
    return <ul>
        {props.allRecipes
            .filter(recipe => props.value === '' || recipe.strMeal.toLowerCase().includes(props.value))
            .map(recipe => <li className="recipe-wrapper" key={recipe.idMeal}>
                <Link to={`/recipe/${recipe.idMeal}`}
                    className="recipe_btn">
                    <Recipe
                        mealImage={recipe.strMealThumb}
                        mealName={recipe.strMeal}
                    />
                </Link>
            </li>
            )}

    </ul>
}
export default RecipeList;