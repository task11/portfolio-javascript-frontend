import { profileKO } from "../data/profile.js";

const aboutId = document.querySelector("#about");

export default class About {
  render = () => {
    const profileData = profileKO;

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
              IT 기획/운영 직무로 근무하며 Java/JSP/Oracle 기반의 시스템 개발 및 운영을 담당했으며 필요에 따라 PMO(Project Management Office) 역할을 겸하였습니다.</br>
              프로덕트를 개발/운영하며 다양한 직무의 구성원들과 적극적으로 커뮤니케이션하며 협업해왔습니다.
              </p>
          </div>
        </div>
        <div class="about__profile">
          <img src="/portfolio-javascript-frontend/assets/profile_ill.png" alt="Profile Image" class="about__image" />
        </div>
      </div>
    `;
  };
}
