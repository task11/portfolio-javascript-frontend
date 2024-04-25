const skillsId = document.querySelector("#skills");

export default class Skills {
  render = () => {
    skillsId.innerHTML = `
  <span class="section__title">Skills</span>
  <div class="skills_contents">
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_js.png"/>
      <div class="skill__content">
        <span class="skill__title">Javascript</span>
        <ul class="skill__list">
          <li class="skill__item">· Javascript의 동작 원리에 대해 이해하고 있습니다.</li>
          <li class="skill__item">· ES6+ Javascript 스펙에 대한 이해도와 경험을 가지고 있습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_react.png"/>
      <div class="skill__content">
        <span class="skill__title">React</span>
        <ul class="skill__list">
          <li class="skill__item">· React의 동작원리에 대해 이해하고 있습니다.</li>
          <li class="skill__item">· React를 활용한 SPA 개발 경험이 있습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_ts.png"/>
      <div class="skill__content">
        <span class="skill__title">Typescript</span>
        <ul class="skill__list">
          <li class="skill__item">· TypeScript에 대한 기본적인 이해 및 경험이 있습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_html.png"/>
      <div class="skill__content">
        <span class="skill__title">HTML5</span>
        <ul class="skill__list">
          <li class="skill__item">· 시맨틱 마크업에 대한 이해도가 있습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skils_css.png"/>
      <div class="skill__content">
        <span class="skill__title">CSS3</span>
        <ul class="skill__list">
          <li class="skill__item">· BEM과 같은 CSS 방법론에 대한 이해도가 있습니다.</li>
          <li class="skill__item">· 반응형 웹 디자인에 대한 경험이 있습니다.</li>
          <li class="skill__item">· CSS in JS 사용 경험이 있습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_git.png"/>
      <div class="skill__content">
        <span class="skill__title">Git</span>
        <ul class="skill__list">
          <li class="skill__item">· 코드 형상관리에 대한 이해도가 있습니다.</li>
          <li class="skill__item">· Git 브랜치 전략을 이해하고 적용할 수 있습니다.</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  };
}
