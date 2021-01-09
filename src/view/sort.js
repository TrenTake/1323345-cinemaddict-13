// export const createSortTemplate = () => {
//   return (
//     `<ul class="sort">
//       <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
//       <li><a href="#" class="sort__button">Sort by date</a></li>
//       <li><a href="#" class="sort__button">Sort by rating</a></li>
//     </ul>`
//   );
// };

import {Template} from "./template";


export class Sort extends Template {
  constructor() {
    super();
    let list = document.createElement(`ul`);
    list.classList.add(`sort`);
    list.innerHTML = `<li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
                      <li><a href="#" class="sort__button">Sort by date</a></li>
                      <li><a href="#" class="sort__button">Sort by rating</a></li>`;

    this._element = list;
  }
}
