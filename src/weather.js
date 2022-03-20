const API_KEY = 'e3d4a5e17cb42fd8c8fbe0ae56dd4ae3';
const templateIdL = document.querySelector('.real-time-information span');
const templateIdW = document.querySelector('.real-time-weather span');


export default class Weather {

  onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        templateIdL.innerText = `
          ${res.weather[0].main}

          ${res.name}
        `;
        templateIdW.innerText = `${res.main.temp}°`
      });


  }

  onGeoError = () => {
    alert("Can't find locaiton..");
  }

  render = () => {
    navigator.geolocation.getCurrentPosition(this.onGeoOk, this.onGeoError);

  }
}