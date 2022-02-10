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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

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

// getCountryData('Portugal');
// getCountryData('United Kingdom');

// New modern way

const getCountryDataPromise = function (country) {
  fetch(`${restCountriesURL}/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found. ${response.status}`);
      return response.json();
    })
    .then(data => {
      const [countryData] = data;

      renderCountry(countryData);
      const borderCountry = countryData.borders[0];

      if (!borderCountry) return;

      return fetch(`${restCountriesURL}/alpha/${borderCountry}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data))
    .catch(err => renderError(err.message))
    .finally((countriesContainer.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryDataPromise('Mexico');
});

// Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country 
only based on GPS coordinates. For that, you will use a second API to geocode 
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁 

Your tasks: 
PART 1 
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
and a longitude value ('lng') (these are GPS coordinates, examples are in test 
data below). 

2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
promises to get the data. Do not use the 'getJSON' function we created, that 
is cheating 😉 

3. Once you have the data, take a look at it in the console to see all the attributes 
that you received about the provided location. Then, using this data, log a 
message like this to the console: “You are in Berlin, Germany” 
4. Chain a .catch method to the end of the promise chain and log errors to the 
console 
5. This API allows you to make only 3 requests per second. If you reload fast, you 
will get this error with code 403. This is an error with the request. Remember, 
fetch() does not reject the promise in this case. So create an error to reject 
the promise yourself, with a meaningful error message 
 
PART 2 
6. Now it's time to use the received data to render a country. So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that 
we have been using. 
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code) 
 
Test data: 

Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
Coordinates 2: 19.037, 72.873 
Coordinates 3: -33.933, 18.474 
 
GOOD LUCK 😀 
*/

const whereAmI = function (lat, lng) {
  console.log('--------------WHERE AM I---------------');
  const geoSite = 'https://geocode.xyz';
  fetch(`${geoSite}/${lat},${lng}?geoit=json`)
    .then(resp => {
      if (!resp.ok) throw new Error(`Something went wrong. ${resp.status}`);
      return resp.json();
    })
    .then(data => {
      const { city, country } = data;
      console.log(`You are in ${city}, ${country}.`);

      getCountryDataPromise(country);
    })
    .catch(err => console.error(err));
};

whereAmI(52.508, 13.381); // GERMANY
// whereAmI(19.037, 72.873); // INDIA
// whereAmI(-33.933, 18.474); // SOUTH AFRICA
