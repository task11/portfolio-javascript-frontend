const footerId = document.querySelector("#footer");

export default class Footer {
  render = () => {
    footerId.innerHTML = `
      <p class="footer__text">© 2024 Jeong Hyeon Kim. All rights reserved.</p>
    `;
  };
}
