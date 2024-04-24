const experiencesId = document.querySelector("#experiences");

export default class Experiences {
  render = () => {
    experiencesId.innerHTML = `
    <span class="section__title">Experiences</span>
      <div class="experiences__wrapper">
        <div class="experiences__contents">
          <div class="experiences__content ">
            <div class="experiences__title">
              <div class="experiences__name content_left">
                <span>원티드 프리온보딩 챌린지</span>
              </div>
              <div class="experiences__roll content_left">
                <span>Front-End Developer</span>
              </div>
            </div>
            <div class="experiences__summary">
              <div class="experiences__period">
                2020.06 - 2022.03
              </div>
              <div class="experiences__info">
                <ul class="info__list">
                  <li>· 4주간 7개의 기업 과제 수행 <a href="https://github.com/7th-wanted-pre-onboarding-frontend" target="_blank">👉</a></li>
                  <li>· 코드 리뷰,토론 등 동료 학습 방식으로 서비스 설계 및 구현</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="experiences__content ">
            <div class="experiences__summary">
              <div class="experiences__period content_left">
                2020.06 - 2022.03
              </div>
              <div class="experiences__info content_left">
                <ul class="info__list">
                  <li>· 코드숨에서 진행하는 프론트엔드 리액트 과정 이수</li>
                  <li>· TDD,테스트 코드 작성을 통한 견고한 코드 개발 방법학습</li>
                  <li>· React, Jest, Eslint 학습</li>
                </ul>
              </div>
            </div>
            <div class="experiences__title">
              <div class="experiences__name">
                <span>코드숨 리액트 과정</span>
              </div>
              <div class="experiences__roll">
                <span>Front-End Developer</span>
              </div>
            </div>
          </div>
          <div class="experiences__content content__left">
            <div class="experiences__title">
              <div class="experiences__name content_left">
                <span>엘리스 소프트웨어 엔지니어 트랙</span>
              </div>
              <div class="experiences__roll content_left">
                <span>Front-End Developer</span>
              </div>
            </div>
            <div class="experiences__summary">
              <div class="experiences__period">
                2020.06 - 2022.03
              </div>
              <div class="experiences__info">
                <ul class="info__list">
                  <li>· 팀프로젝트,코드리뷰를 통한 협업경험</li>
                  <li>· Javascript, React, TypeScript 외 다수 학습</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="experiences__content  content_end">
            <div class="experiences__summary">
              <div class="experiences__period content_left">
                2020.06 - 2022.03
              </div>
              <div class="experiences__info content_left">
                <ul class="info__list">
                  <li>· 현장 자금 수지 추정 프로젝트</li>
                  <li>· 태영건설 RPA 솔루션 도입</li>
                </ul>
              </div>
            </div>
            <div class="experiences__title">
              <div class="experiences__name">
                <span>태영건설</span>
              </div>
              <div class="experiences__roll">
                <span>IT Team / 사원</span>
              </div>
            </div>
          </div>
        </div>
        <div class="experiences__bar">
          <div class="experiencse__ball ball__contents__1">
            <div class="ball__ball"></div>
          </div>
          <div class="experiencse__ball ball__contents__2">
            <div class="ball__ball"></div>
          </div>
          <div class="experiencse__ball ball__contents__3">
            <div class="ball__ball"></div>
          </div>
          <div class="experiencse__ball ball__contents__4">
            <div class="ball__ball"></div>
          </div>
        </div>
      </div>
    `;
  };
}
