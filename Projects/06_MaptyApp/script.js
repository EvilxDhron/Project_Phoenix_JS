"use strict";

import { LeafletMap, TileLayer, Marker } from "leaflet";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const coords = [position.coords.latitude, position.coords.longitude];

      const map = new LeafletMap("map").setView(coords, 15);

      new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      new Marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br>Easily customizable.")
        .openPopup();
    },
    () => alert("Can't find you location!!!"),
  );
}
