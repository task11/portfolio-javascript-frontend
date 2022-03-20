import Clock from "./clock.js";
import Weather from "./weather.js"


const bgColors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const randomColorIndex = {
  start: bgColors[Math.floor(Math.random() * bgColors.length)],
  end: bgColors[Math.floor(Math.random() * bgColors.length)]
};

const $body = document.querySelector('body')

$body.style.background = `repeating-linear-gradient(-45deg, ${randomColorIndex.start}, ${randomColorIndex.start} 100px, ${randomColorIndex.end} 100px, ${randomColorIndex.end} 200px)`;

const weather = new Weather();
const clock = new Clock();

weather.render();
setInterval(clock.render, 1000);

