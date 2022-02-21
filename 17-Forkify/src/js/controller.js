import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';

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
    console.error(e);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));
