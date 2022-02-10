'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const restCountriesURL = 'https://restcountries.com/v2';
///////////////////////////////////////

function getCountryData(country) {
  // Old School way
  const request = new XMLHttpRequest();
  request.open('GET', `${restCountriesURL}/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
  });
}

function renderCountry(data) {
  const { flag, name, region, population, languages, currencies } = data;
  const language = languages[0].name;
  const currency = currencies[0].name;

  const roundedPop = (Number(population) / 1000000).toFixed(1);

  const html = `
    <article class="country">
      <img class="country__img" src=${flag} />
      <div class="country__data">
        <h3 class="country__name">${name}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${roundedPop}</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

getCountryData('Portugal');
getCountryData('United Kingdom');

// New modern way

const getCountryDataPromise = function (country) {
  fetch(`${restCountriesURL}/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryDataPromise('Mexico');
