import React from 'react';

const Recipe = props => {
  console.log(props)

  //const getRecipeId = () => {
  //props.getRecipeId(props.id)
  //}

  return <div >
    <img src={props.mealImage} alt={props.mealName} />
    <h3 >{props.mealName}</h3>
  </div>
}

export default Recipe;