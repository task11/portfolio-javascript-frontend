import Clock from "./components/clock.js";


const clock = new Clock();

setInterval(clock.render, 1000);