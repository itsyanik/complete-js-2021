import View from './View';
import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one.';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, handler));
  }

  _generateMarkup() {
    const recipeImage = `
      <figure class="recipe__fig">
        <img 
          src="${this._data.image}" 
          alt="${this._data.title}" 
          class="recipe__img" 
        />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
    `;

    const ingredientList = function () {
      this._data.ingredients.map((ingredient, index) => {
        const { quantity, unit, description } = ingredient;

        return `
          <li class="recipe__ingredient" key=${index}>
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">
              ${quantity ? new Fraction(quantity).toString() : ''}
            </div>
            <div class="recipe__description">
              <span class="recipe__unit">${unit}</span>
              ${description}
            </div>
          </li>
        `.join();
      });
    };

    const recipeInfo = `
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">
          ${this._data.cookingTime}
        </span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">
          ${this._data.servings}
        </span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

    const recipeDirections = `
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">
            ${this._data.publisher}
          </span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;

    const markup = `
      ${recipeImage}
      <div class="recipe__details">
        ${recipeInfo}
        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${ingredientList}
        </ul>
      </div>

      ${recipeDirections}
      ${recipeInfo}
    `;

    return markup;
  }
}

export default new RecipeView();
