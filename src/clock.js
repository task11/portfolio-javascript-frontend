const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const templateId = document.getElementById('root')

export default class Clock {
  render = () => {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const today = new Date(utc + (KR_TIME_DIFF));

    const dayObject = {
      year: today.getFullYear(),
      month: String(today.getMonth() + 1).padStart(2, "0"),
      date: String(today.getDate()).padStart(2, "0"),
      hour: String(today.getHours()).padStart(2, "0"),
      min: String(today.getMinutes()).padStart(2, "0"),
      sec: String(today.getSeconds()).padStart(2, "0")
    }
    templateId.innerHTML = `
                <div class="real-time-information">
                  <div class="real-time-location">Seoul</div>
                  <div class="wrap-clock">
                    <div class="real-time-weather">20°</div>
                    <div class="real-time-clock">
                      <div class="box-clock">${dayObject.hour}</div>
                      <span>:</span>
                      <div class="box-clock">${dayObject.min}</div>
                    </div>
                  </div>
                </div>
            `;
  }
}
