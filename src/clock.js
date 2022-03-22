const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

const templateId = document.querySelector('.real-time-clock')


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
    <div class="box-clock">${dayObject.hour}</div>
    <span>:</span>
    <div class="box-clock">${dayObject.min}</div>
`;
  }
}



/* @font-face {
  font-family: 'LAB디지털';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff') format('woff');
  font-weight: normal;
  font-style: normal;
} */
/* start */

/* 
#root{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}

.real-time-information {
  display: flex;
  flex-direction: row;
  font-family: 'LAB디지털';
  border-radius: 10px;
  box-shadow: 6px 6px 16px rgb(112, 112, 112);
}

.real-time-location{
  padding: 10px;
  color: white;
  background-color: rgb(59, 59, 185);
  border-radius: 10px 0 0 10px;
  text-align: center;
}

.wrap-clock {
  display: flex;
  flex-direction: row;
  font-size: 50px;
  padding: 18px;
  background-color: white;
  border-radius: 0 10px 10px 0;
  
}

.real-time-weather{
  color: rgb(59, 59, 185);
}

.real-time-clock{
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  color: rgb(59, 59, 185);
  
}

.box-clock{
  background-color: rgb(59, 59, 185);
  border-radius: 10px;
  margin: 0 5px 0 5px;
  padding: 0 15px 0 15px;
  color: white;
}

.apps-todo {
  margin-top: 30px;
  background-color: #fff;
  width: 600px;
  height: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 16px rgb(112, 112, 112);
  border-radius: 20px;
}

.todo_form {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.todo_input {
  width: 100%;
  font-size: 16px;
  padding: 12px 14px;
  background-color: #f6f6f6;
  border-radius: 8px;
  border: none;
}

.todo_submit_button {
  background-color: rgb(59, 59, 185);
  color: #fff;
  width: 80px;
  margin-left: 12px;
  font-size: 22px;
  border-radius: 8px;
  border: none;
}

.todos {
  margin-top: 106px;
  overflow: auto;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}

.content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content > input[type='checkbox'] {
  transform: scale(1.5);
  margin-left: 10px;
}

.content > label {
  font-size: 16px;
  margin-left: 20px;
  padding-top: 4px;
  width: 100%;
}

.content > input[type='text'] {
  font-size: 16px;
  margin-left: 20px;
  padding-top: 4px;
  padding-left: 0;
  width: 100%;
}

.item_buttons {
  width: 118px;
}

.item_buttons > button {
  width: 42px;
  height: 42px;
  color: #555555;
  font-size: 14px;
  border-radius: 8px;
}

.item_buttons > button:first-child {
  background-color: rgb(59, 59, 185);
  margin-right: 8px;
}

.todo_checkbox {
  appearance: auto !important;
}

.item input[type='text'] {
  display: none;
}

.edit_buttons {
  display: none;
} */