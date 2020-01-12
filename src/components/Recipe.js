import React from 'react';

const Recipe = props => {
  return <div >
    <img src={props.mealImage} alt={props.mealName} />
    <h3 >{props.mealName}</h3>
  </div>
}

export default Recipe;