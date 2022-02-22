import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = Number(btn.dataset.goto);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    const nextPageMarkup = `
      <button 
        data-goto="${currentPage + 1}" 
        class="btn--inline pagination__btn--next"
      >
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;

    const prevPageMarkup = `
      <button 
        data-goto="${currentPage - 1}"
        class="btn--inline pagination__btn--prev"
      >
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
    `;

    if (currentPage === 1 && numPages > 1) {
      return nextPageMarkup;
    }

    if (currentPage === numPages && numPages > 1) {
      return prevPageMarkup;
    }

    if (currentPage < numPages) {
      return `
        ${prevPageMarkup}
        ${nextPageMarkup}
      `;
    }

    return '';
  }
}

export default new PaginationView();
