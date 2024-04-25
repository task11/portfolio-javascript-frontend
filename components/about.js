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
            HTML, CSS, JavaScript를 활용하여 사용자 친화적이고 반응형 웹 사이트와 웹 애플리케이션을 만듭니다.<br/>
            특히 React와 같은 현대적인 자바스크립트 라이브러리와 프레임워크에 관심이 많습니다.
            사용자 경험을 중요하게 생각하며, 효율적이고 접근성 높은 코드를 작성하는 것을 추구합니다.<br/>
            또한 웹 표준과 모범 사례를 준수하여 유지보수 가능하고 확장 가능한 코드를 작성하고자 노력합니다.
            </p>
          </div>
          <div class="about__contact">
            <a class="contact__item" href="https://github.com/task11" target="_blank">
              <img class="contact__img" src="/assets/github_contact.png" alt="github link"/>
            </a>
            <a class="contact__item" href="mailto:6539305@gmail.com">
              <img class="contact__img" src="/assets/mail.png" alt="mail link"/>
            </a>
          </div>
        </div>
        <div class="about__profile">
          <img src="/assets/profile_ill.png" alt="Profile Image" class="about__image" />
        </div>
      </div>
    `;
  };
}
