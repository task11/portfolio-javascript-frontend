const aboutId = document.querySelector("#about");

export default class About {
  render = () => {
    aboutId.innerHTML = `
      <span class="section__title">About</span>
      <div class="section__about">
        <div class="about__text">
          <div class="about__greeting">
            <div class="greeting__hello">
                <xmp class="greeting__tag"><p></xmp>
                <span>안녕하세요</span>
                <xmp class="greeting__tag"></p></xmp>
            </div>
            <span>프론트엔드 개발자 </span>
            <span><strong class="greeting__name">김정현</strong>입니다.</span>
          </div>
          <div class="about__intro">
            <p>
            성장하는 스타트업에서 프론트엔드 개발 역량과 빠른 적응력을 토대로 성공적인 도전과 검증을 이뤄내고 싶습니다.<br/>
            문제의 본질을 이해하고 해결할 수 있는 답을 찾는 것을 좋아합니다.<br/>
            반복되는 작업을 자동화하고, 업무 생산성에 도움이 되는 프로세스를 구축하는 것에 관심이 많습니다.<br/>
            </p>
          </div>
          <div class="about__contact">
            <a class="contact__item" href="https://github.com/task11" target="_blank">
              <img class="contact__img" src="/portfolio-javascript-frontend/assets/github_contact.png" alt="github link"/>
            </a>
            <a class="contact__item" href="mailto:6539305@gmail.com">
              <img class="contact__img" src="/portfolio-javascript-frontend/assets/mail.png" alt="mail link"/>
            </a>
          </div>
        </div>
        <div class="about__profile">
          <img src="/portfolio-javascript-frontend/assets/profile_ill.png" alt="Profile Image" class="about__image" />
        </div>
      </div>
    `;
  };
}
