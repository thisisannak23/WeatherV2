let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

let currently = document.querySelector("#currently");
currently.innerHTML =`Currently, it is ${day}, ${month} ${date}, ${year}. The time is ${hours}:${minutes}.`;
let searchInput = document.querySelector("#city");

let cityWeather = document.querySelector("#cityWeather");

function searching(event) {
  event.preventDefault();
  cityWeather.innerHTML = `Today's Weather in ${searchInput.value}:`;
}

let button = document.querySelector("#citySearching");
button.addEventListener("click", searching);