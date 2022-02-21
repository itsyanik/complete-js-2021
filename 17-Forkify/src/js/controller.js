import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2
const controlRecipes = async function () {
  try {
    recipeView.showLoader();

    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeView.render(recipe);
  } catch (e) {
    recipeView.renderError(e);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.showLoader();
    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch (e) {
    console.error(e);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
