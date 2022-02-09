'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// GLOBALS
let map, mapEvent;

// CONSTANTS
const MAP_ZOOM_LEVEL = 13;
const POPUP_MAX_WIDTH = 250;
const POPUP_MIN_WIDTH = 100;

// Prevents old browsers from crashing
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];

      // LeafLet data
      map = L.map('map').setView(coords, MAP_ZOOM_LEVEL);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (e) {
        mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}

form.addEventListener('submit', function (e) {
  // prevents page reload
  e.preventDefault();

  // clear inputs
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Display marker
  map.on('click', function (mapEvent) {
    const { lat, lng } = mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          autoClose: false,
          className: 'running-popup',
          closeOnClick: false,
          maxWidth: POPUP_MAX_WIDTH,
          minWidth: POPUP_MIN_WIDTH,
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  });
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
