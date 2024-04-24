const headerId = document.querySelector(".header");

export default class Header {
  render = () => {
    headerId.innerHTML = `
      <div class="header__logo">
        <strong class="logo__accent">Jeong</strong> Hyeon Kim
      </div>
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#experiences" class="nav__link">Experiences</a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">Skills</a>
          </li>
          <li class="nav__item">
            <a href="#projects" class="nav__link">Projects</a>
          </li>
        </ul>
      </nav>
    `;
  };
}
