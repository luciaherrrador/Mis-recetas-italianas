import React from 'react';
import '../stylesheets/App.css';
import RecipeList from './RecipeList';
import { fetchRecipes, fetchSingleRecipe } from '../services/Api';
import Search from './Search';
import { Switch, Route } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderRecipeInfo = this.renderRecipeInfo.bind(this);
    this.fetchSingleRecipe = this.fetchSingleRecipe.bind(this);

    this.state = {
      allRecipes: [],
      value: '',
      singleRecipe: {}
    }
  }

  componentDidMount() {
    fetchRecipes()
      .then(recipe => {
        this.setState({
          allRecipes: recipe.meals
        })
      })
  }

  fetchSingleRecipe(id) {
    if (id !== this.state.singleRecipe.idMeal) {
      fetchSingleRecipe(id)
        .then(data => {
          this.setState({
            singleRecipe: data.meals[0]
          })
        })
    }
  }

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  renderRecipeInfo(props) {
    console.log(props)
    this.fetchSingleRecipe(props.match.params.id);
    return <RecipeInfo recipe={this.state.singleRecipe} />
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Search
              handleChange={this.handleChange}
            />
            <RecipeList
              allRecipes={this.state.allRecipes}
              value={this.state.value}
              getRecipeId={this.getRecipeId}
            />
          </Route>
          <Route path="/recipe/:id" render={this.renderRecipeInfo}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;