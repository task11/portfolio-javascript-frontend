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
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
          <li class="skill__item">· 무수한 오류들을 겪어내며 코드의 순서가 매</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_react.png"/>
      <div class="skill__content">
        <span class="skill__title">React</span>
        <ul class="skill__list">
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
          <li class="skill__item">· 무수한 오류들을 겪어내며 코드의 순서가 매</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_ts.png"/>
      <div class="skill__content">
        <span class="skill__title">Typescript</span>
        <ul class="skill__list">
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
          <li class="skill__item">· 무수한 오류들을 겪어내며 코드의 순서가 매</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_html.png"/>
      <div class="skill__content">
        <span class="skill__title">HTML5</span>
        <ul class="skill__list">
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skils_css.png"/>
      <div class="skill__content">
        <span class="skill__title">CSS3</span>
        <ul class="skill__list">
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
        </ul>
      </div>
    </div>
    <div class="skill__card">
      <img class="skill_thumnail" src="/portfolio-javascript-frontend/assets/skills_git.png"/>
      <div class="skill__content">
        <span class="skill__title">Git</span>
        <ul class="skill__list">
          <li class="skill__item">· 아는 게 적을수록 코드가 길어지고, 지식이  깨달았습니다.</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  };
}
