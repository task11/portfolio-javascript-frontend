import { profileKO } from "../data/profile.js";

const aboutId = document.querySelector("#about");

export default class About {
  render = () => {
    const profileData = profileKO;

    aboutId.innerHTML = `
    <div>
     ${profileData.name}
    </div>
    `;
  };
}
