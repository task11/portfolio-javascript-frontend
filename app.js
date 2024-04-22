import About from "./components/about.js";
import Header from "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  const about = new About();

  // header.render();
  // about.render();

  console.log("페이지가 로드되었습니다.");
});
