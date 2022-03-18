class clock {



  constructor() {
    this.$clockTitle = document.querySelector(".js-clock");
    this.D_DAY = "12/25";
    getDday();
    setInterval(getDday, 1000);
  }



  getDate = (date) => {
    return {
      year: date.getFullYear(),
      time: date.getTime()
    };
  };

  compareDate = (now, dDay) => {
    const gap = dDay.time - now.time;

    return {
      day: String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(3, "0"),
      hour: String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      min: String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0"),
      sec: String(Math.floor((gap / 1000) % 60)).padStart(2, "0")
    };
  };

  getDday = () => {
    const current = new Date();
    const currentDate = getDate(current);

    const christmas = new Date(`${currentDate.year}/${D_DAY}`);
    const christmasDate = getDate(christmas);

    const dDate = compareDate(currentDate, christmasDate);

    $clockTitle.innerText = `${dDate.day}d ${dDate.hour}h ${dDate.min}m ${dDate.sec}s`;
  };




}

export default clock;