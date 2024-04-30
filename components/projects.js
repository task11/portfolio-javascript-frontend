const projectsId = document.querySelector("#projects");

export default class Projects {
  render = () => {
    projectsId.innerHTML = `
<span class="section__title">Projects</span>
      <div class="project__contents">
        <div class="project__card">
          <div class="project__thumnail">
            <img class="thumnail__image" src="/portfolio-javascript-frontend/assets/port2.png"/>
            <div class="project__stacks">
              <div class="project__stack skill__ts">
                <span>typescript</span>
              </div>
              <div class="project__stack skill__react">
                <span>react</span>
              </div>
              <div class="project__stack skll__recoil">
                <span>recoil</span>
              </div>
              <div class="project__stack skill__reactquery">
                <span>react-query</span>
              </div>
              <div class="project__stack skill__styledcomponents">
                <span>styled-components</span>
              </div>
            </div>
            <div class="project__link">
              <a href="https://www.githubgg.site/" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/browser.png"/></a>
              <a href="https://github.com/task11/github-gg-react-typescript-frontend" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/github.png"/></a>
              <a href="https://www.notion.so/Github-gg-aa13110e8a4044019ad60e856070e9fa?pvs=4" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/doc.png"/></a>
            </div>
          </div>
          <div class="project__summary">
            <div class="project__title">
              <strong class="project__name title__personal">GithubGG</strong>
              <span class="project__date">2022.11 - 2023.02 / 2023.12 - 2024.04</span>
            </div>
            <div class="project__description">
              <div class="project__intro">
                기존 Github의 유저 검색 기능의 단계를 문제로 정의하고, Github API를 활용하여 유저 검색 기능만 가능한 서비스를 개발했습니다.<br/>
                유저를 검색하여 최근 커밋에 대한 정보와 퍼블릭 레포지토리의 간단한 정보 등을 확인할 수 있습니다.
              </div>
              <div class="project__hr"></div>
              <div class="project__task project__info">
                <span class="project__label">담당 업무</span>
                <ul class="project__list">
                    <li>· Github API를 활용한 유저 검색, 유저 최근 3개의 커밋, 유저 레포지토리 정보 조회 기능 구현</li>
                    <li>· Jest / react-testing-library를 활용한 컴포넌트별 단위 테스트 코드 작성</li>
                    <li>· Theme 기반의 공통 스타일 관리, Dark/Light 모드 구현</li>
                    <li>· Github Action을 활용한 CI/CD 환경 구성으로 배포 자동화 구현</li>
                    <li>· Husky를 활용한 Eslint, testing, code formatting 자동화</li>
                    <li>· <a href="https://github.com/task11/github-gg-react-typescript-frontend/projects?query=is%3Aopen" class="link__out">Github project</a>를 활용한 이슈 관리 및 작업 내용 review</li></li>
                </ul>
              </div>
              <div class="project__result project__info">
                <div class="project__label">성과</div>
                <ul class="project__list">
                  <li>· Dark/Light Theme 변경 시 깜빡임 현상을 해결하기 위해 React hook인 useEffect를 useLayoutEffect로 대체하여 문제 해결</li>
                  <li>· 검색 창에 키워드 입력 시 Debounce 기법을 활용한 API 호출 최적화</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="project__type type__personal">개인 프로젝트</div>
        </div>
        <div class="project__card">
          <div class="project__thumnail">
            <img class="thumnail__image" src="/portfolio-javascript-frontend/assets/prot1.png"/>
            <div class="project__stacks">
              <div class="project__stack skill__ts">
                <span>typescript</span>
              </div>
              <div class="project__stack skill__next">
                <span>nextJS</span>
              </div>
              <div class="project__stack skill__graphql">
                <span>graphQL</span>
              </div>
              <div class="project__stack skill__apollo">
                <span>apollo-client</span>
              </div>
              <div class="project__stack skill__styledcomponents">
                <span>styled-components</span>
              </div>
            </div>
            <div class="project__link">
              <a href="https://github.com/MyTumblerDiary/MTD-front" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/github.png"/></a>
              <a href="https://www.figma.com/file/aBM6ObNmaKPaaUI2U2PNaR/My-Tumbler-Diary?type=design&mode=design&t=CjNNIkDHOLwjVZvI-0" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/figma.png"/></a>
            </div>
          </div>
          <div class="project__summary">
            <div class="project__title">
              <strong class="project__name title__team">나의 텀블러 다이어리</strong>
              <span class="project__date">2023.02 - 2023.08</span>
            </div>
            <div class="project__description">
              <div class="project__intro">
                일회용 컵 사용에 따른 환경 문제를 해결하기 위해 개발된 프로젝트로, 하루하루 개인 텀블러 사용 여부를 기록할 수 있는 앱 서비스입니다. <br/>
                사용자가 개인 텀블러 사용을 달력으로 확인할 수 있게 하고 텀블러 사용 시 할인 혜택이 있는 카페 정보를 제공하여 텀블러 사용을 독려합니다.
              </div>
              <div class="project__hr"></div>
              <div class="project__task project__info">
                <span class="project__label">담당 업무</span>
                <ul class="project__list">
                    <li>·  Apollo client를 활용한 GraphQL 통신</li>
                    <li>·  이메일 인증 로직 구현</li>
                    <li>·  회원 가입 시 유저의 입력에 따른 실시간 유효성 검사 로직 구현</li>
                    <li>·  텀블러 사용 기록을 확인할 수 있는 메인 캘린더 페이지 구현</li>
                </ul>
              </div>
              <div class="project__result project__info">
                <div class="project__label">성과</div>
                <ul class="project__list">
                  <li>· 닉네임 / 이메일 중복 체크 시 API 호출 성능 개선을 위해 유효성이 통과 됐을 때만 API를 호출할 수 있도록 개선 </li>
                  <li>· 공통 컴포넌트에 기본적인 디자인 시스템을 도입 및 개발하여 일관적인 사용자 경험을 줄 수 있도록함</li>
                  <li>· 코드 리뷰를 통한 협업으로 다양한 피드백을 주고받아 코드 퀄리티 향상 등의 개선 효과를 얻었음</li>
                  <li>· Linear를 활용한 이슈 관리 및 작업 내용을 리뷰하여 한 주 Cycle 단위의 업무를 수행하였음</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="project__type type__team">팀 프로젝트</div>
        </div>
        <div class="project__card">
          <div class="project__thumnail">
            <img class="thumnail__image" src="/portfolio-javascript-frontend/assets/port3.png"/>
            <div class="project__stacks">
              <div class="project__stack skill__ts">
                <span>typescript</span>
              </div>
              <div class="project__stack skill__react">
                <span>react</span>
              </div>
              <div class="project__stack skll__recoil">
                <span>recoil</span>
              </div>
              <div class="project__stack skill__styledcomponents">
                <span>styled-components</span>
              </div>
            </div>
            <div class="project__link">
              <a href="https://github.com/Bangbang-Gokgok/Bangbanggokgok" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/github.png"/></a>
              <a href="https://www.figma.com/file/ZBXSvJcaxoj9YMJ01SSOhI/7th-project?node-id=0%3A1" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/figma.png"/></a>
            </div>
          </div>
          <div class="project__summary">
            <div class="project__title">
              <strong class="project__name title__team">방방곡곡</strong>
              <span class="project__date">2022.07 - 2022.08</span>
            </div>
            <div class="project__description">
              <div class="project__intro">
                이 프로젝트는 위치 정보를 기반으로 자신의 추억이 담긴 게시물을 공유하는 SNS서비스입니다.<br/>
                위치 정보를 선택하여 공유하는 기존 SNS와는 다르게, 위치 정보를 메인으로 나의 여행 / 일상 기록을 공유하는 SNS를 만들고자 하였습니다.
              </div>
              <div class="project__hr"></div>
              <div class="project__task project__info">
                <span class="project__label">담당 업무</span>
                <ul class="project__list">
                    <li>·  KAKAO MAP API를 활용한 SNS 피드 / 상세 페이지 지도 구현</li>
                    <li>·  친구 찾기, 조회, 추가 기능 구현</li>
                    <li>·  페이지 별 라우팅과 권한 체크 라우터 구현</li>
                </ul>
              </div>
              <div class="project__result project__info">
                <div class="project__label">성과</div>
                <ul class="project__list">                  
                  <li>·  컴포넌트 Lazy loading 적용으로 초기 로딩 최적화</li>
                  <li>·  KAKAO MAP API의 마커 호출 시 API 요청 횟수를 감소시켜 렌더링 최적화</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="project__type type__team">팀 프로젝트</div>
        </div>
        <div class="project__card">
          <div class="project__thumnail">
            <img class="thumnail__image" src="/portfolio-javascript-frontend/assets/port4.png"/>
            <div class="project__stacks">
              <div class="project__stack skill__js">
                <span>javascript</span>
              </div>
              <div class="project__stack skill__html">
                <span>HTML5</span>
              </div>
              <div class="project__stack skill__css">
                <span>CSS3</span>
              </div>
            </div>
            <div class="project__link">
              <a href="https://github.com/vegeten/vegeten-shop" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/github.png"/></a>
              <a href="https://opposite-tithonia-998.notion.site/VEGETEN-eb71263eb4494e91ad0eac8b587b8f10" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/doc.png"/></a>
              <a href="https://www.figma.com/file/O4Zgf6H4iNtGNLQ4ZlOxg9/10%EC%A1%B0?type=design&node-id=0-1&mode=design&t=UlG9hAtfCbH6zIr9-0" target="_blank"><img class="link__image" src="/portfolio-javascript-frontend/assets/figma.png"/></a>
            </div>
          </div>
          <div class="project__summary">
            <div class="project__title">
              <strong class="project__name title__team">VEGETEN</strong>
              <span class="project__date">2022.05 - 2022.06</span>
            </div>
            <div class="project__description">
              <div class="project__intro">
                채식주의자들을 위한 비건 쇼핑몰 서비스입니다.
              </div>
              <div class="project__hr"></div>
              <div class="project__task project__info">
                <span class="project__label">담당 업무</span>
                <ul class="project__list">
                    <li>·  로그인 페이지 로그인, 비밀번호 찾기 기능 구현, 회원가입 페이지 구현</li>
                    <li>·  마이페이지 주문내역 조회, 유저 정보 수정 기능 구현</li>
                    <li>·  상품 페이지 상품 검색 기능 구현, 리뷰 추가/수정/삭제 기능 구현</li>
                </ul>
              </div>
              <div class="project__result project__info">
                <div class="project__label">성과</div>
                <ul class="project__list">            
                  <li>·  바닐라 자바스크립트로 MPA(Multiple Page Application) 구현</li>
                  <li>·  http 요청 시 각 토큰의 만료 시간을 체크하여 토큰 재발급 로직 구현으로 토큰 탈취 보안 이슈 해결</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="project__type type__team">팀 프로젝트</div>
        </div>
      </div>`;
  };
}
