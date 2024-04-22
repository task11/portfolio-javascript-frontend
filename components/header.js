const headerId = document.querySelector("#header");

export default class Header {
  render = () => {
    headerId.innerHTML = `
    <h1>나의 포트폴리오</h1>
      <nav>
          <a href="#about">소개</a>
          <a href="#projects">프로젝트</a>
          <a href="#contact">연락처</a>
      </nav>
    `;
  };
}
