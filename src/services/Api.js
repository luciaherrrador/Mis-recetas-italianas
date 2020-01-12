const RECIPELIST = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';
const RECIPEINFO = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchRecipes = () => fetch(RECIPELIST).then(response => response.json());
const fetchSingleRecipe = (id) => fetch(RECIPEINFO + id).then(response => response.json());

export { fetchRecipes, fetchSingleRecipe };
