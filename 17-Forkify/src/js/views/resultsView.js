import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipies found for that query! Please try another one.';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkup).join();
  }

  _generateMarkupPreview(results) {
    const { id, image, title, publisher } = results;
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="${id}">
          <figure class="preview__fig">
            <img src="${image}" alt="${title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${title}</h4>
            <p class="preview__publisher">${publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
