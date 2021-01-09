// export const createShowMoreButtonTemplate = () => {
//   return (
//     `<button class="films-list__show-more">Show more</button>`
//   );
// };

import {Template} from "./template";


export class ShowMoreButton extends Template {
  constructor() {
    super();
    let button = document.createElement(`button`);
    button.classList.add(`films-list__show-more`);
    button.appendChild(document.createTextNode(`Show more`));

    this._element = button;
  }
}
