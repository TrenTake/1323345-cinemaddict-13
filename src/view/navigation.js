// export const createMainNavigationTemplate = () => {
//   return (
//     `<nav class="main-navigation">
//       <div class="main-navigation__items">
//         <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
//         <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
//         <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
//         <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
//       </div>
//       <a href="#stats" class="main-navigation__additional">Stats</a>
//     </nav>`
//   );
// };

import {Template} from "./template";


export class Navigation extends Template {
  constructor() {
    super();
    let navigation = document.createElement(`nav`);
    navigation.classList.add(`main-navigation`);
    navigation.innerHTML = `<div class="main-navigation__items">
                              <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
                              <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
                              <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
                              <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
                            </div>
                            <a href="#stats" class="main-navigation__additional">Stats</a>`;

    this._element = navigation;
  }
}
