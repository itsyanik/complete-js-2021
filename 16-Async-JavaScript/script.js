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
  const language = languages[0]?.name;
  const currency = currencies[0]?.name;

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

// whereAmI(52.508, 13.381); // GERMANY
// whereAmI(19.037, 72.873); // INDIA
// whereAmI(-33.933, 18.474); // SOUTH AFRICA

const lottery = new Promise(function (resolve, reject) {
  console.log('Drawing lotto numbers');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You LOSE'));
    }
  }, 2000);
});

lottery.then(res => console.log(res)).catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI2 = function () {
  console.log('--------------WHERE AM I 2---------------');
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const geoSite = 'https://geocode.xyz';

      return fetch(`${geoSite}/${lat},${lng}?geoit=json`);
    })
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

getPosition().then(res => console.log(res));
btn.addEventListener('click', whereAmI2);

// Challenge #2
/* Coding Challenge #2 
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen. 
Y
our tasks: 
Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own 😉 

PART 1 

1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path 
2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise 
3. If this part is too tricky for you, just watch the first part of the solution 
 
PART 2 

4. Consume the promise using .then and also add an error handler 
5. After the image has loaded, pause execution for 2 seconds using the 'wait' 
function we created earlier 
6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that 😉) 

7. After the second image has loaded, pause execution for 2 seconds again 
8. After the 2 seconds have passed, hide the current image 
Test data: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fast 
 
GOOD LUCK 😀 */

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currImg;
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);

      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
  })
  .catch(err => console.error(err));

// ASYNC AWAIT
const whereAmIAsync = async function () {
  const pos = await getPosition();

  const { latitude: lat, longitude: lng } = pos.coords;
  const geoSite = 'https://geocode.xyz';

  const geoCoding = await fetch(`${geoSite}/${lat},${lng}?geoit=json`);
  const dataGeo = await geoCoding.json();

  const res = await fetch(`${restCountriesURL}/name/${dataGeo.country}`);
  const data = await res.json();

  return renderCountry(data);
};

whereAmIAsync('Uruguay');
