// import {Utils} from "../utils";
import {Template} from "./template";
// import {Details} from './details';


export class FilmCardTemplate extends Template {
  constructor(movie) {
    super();
    let article = document.createElement(`article`);
    article.classList.add(`film-card`);
    // article.onclick = () => {
    //   document.body.insertAdjacentElement(Utils.createElement(new Details()), `beforeend`);
    // };
    article.innerHTML = `<h3 class="film-card__title">${movie.title}</h3>
                        <p class="film-card__rating">${movie.rating}</p>
                        <p class="film-card__info">
                          <span class="film-card__year">Year 1975</span>
                          <span class="film-card__duration">${movie.duration}</span>
                          <span class="film-card__genre">${movie.genreNames}</span>
                        </p>
                        <img src="./images/posters/${movie.poster}" alt="" class="film-card__poster">
                        <p class="film-card__description">${movie.description}</p>
                        <a class="film-card__comments">${movie.comments.length + ` comments`}</a>
                        <div class="film-card__controls">
                          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                          <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
                        </div>`;
    this._element = article;
  }
}
