// export const createStatisticsTemplate = () => {
//   return (
//     `<p>130 291 movies inside</p>`
//   );
// };

import {Template} from "./template";


export class Statistics extends Template {
  constructor(count = 130291) {
    super();
    let movies = document.createElement(`p`);
    movies.appendChild(document.createTextNode(`${count} movies inside`));

    this._element = movies;
  }
}
