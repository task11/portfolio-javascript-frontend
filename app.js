import About from "./components/about.js";
import Experiences from "./components/experiences.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  const about = new About();
  const experiences = new Experiences();
  const skills = new Skills();
  const projects = new Projects();
  const footer = new Footer();

  header.render();
  about.render();
  experiences.render();
  skills.render();
  projects.render();
  footer.render();

  projects.hydrateEventListener();
});
