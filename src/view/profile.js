// export const createProfileTemplate = () => {
//   return (
//     `<section class="header__profile profile">
//       <p class="profile__rating">Movie Buff</p>
//       <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
//     </section>`
//   );
// };

import {Template} from "./template";


export class Profile extends Template {
  constructor() {
    super();
    let newTemplate = document.createElement(`section`);
    newTemplate.classList.add(`header__profile`, `profile`);
    let profileRating = document.createElement(`p`);
    profileRating.classList.add(`profile__rating`);
    profileRating.appendChild(document.createTextNode(`Movie Buff`));
    let profileAvatar = new Image(35, 35);
    profileAvatar.src = `images/bitmap@2x.png`;
    profileAvatar.alt = `Avatar`;
    profileAvatar.classList.add(`profile__avatar`);

    newTemplate.append(profileRating, profileAvatar);
    this._element = newTemplate;
  }
}
