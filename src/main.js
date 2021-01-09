import {Profile} from './view/profile';
import {Navigation} from './view/navigation';
import {Sort} from './view/sort';
import {ShowMoreButton} from './view/show-button';
import {FilmCardTemplate} from './view/card';
import {Container} from './view/container';
import {Statistics} from './view/statistics';
import {generateFilmCards, getRandomMovie} from './mock/movie-card';
import {Utils} from './utils';

const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;
const FILMS_COUNT = 20;

const films = generateFilmCards(FILMS_COUNT);
const render = (container, template, place) => {
  container.insertAdjacentElement(place, template);
};

const headerElement = document.querySelector(`.header`);
render(headerElement, Utils.createElement(new Profile()), `beforeend`);
const mainElement = document.querySelector(`.main`);
render(mainElement, Utils.createElement(new Navigation()), `beforeend`);
render(mainElement, Utils.createElement(new Sort()), `beforeend`);
render(mainElement, Utils.createElement(new Container()), `beforeend`);
const filmsExtraListElements = document.querySelectorAll(`.films-list--extra`);

const filmContainerElement = document.querySelector(`.films-list`);
const cardWrapperElement = filmContainerElement.querySelector(`.films-list__container`);
for (let i = 1; i <= CARDS_COUNT; i++) {
  render(cardWrapperElement, Utils.createElement(new FilmCardTemplate(getRandomMovie(films))), `beforeend`);
}

const topRatedContainerElement = filmsExtraListElements[0].querySelector(`.films-list__container`);
for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(topRatedContainerElement, Utils.createElement(new FilmCardTemplate(getRandomMovie(films))), `beforeend`);
}

const mostCommentedContrainerElement = filmsExtraListElements[1].querySelector(`.films-list__container`);
for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(mostCommentedContrainerElement, Utils.createElement(new FilmCardTemplate(getRandomMovie(films))), `beforeend`);
}

render(filmContainerElement, Utils.createElement(new ShowMoreButton()), `beforeend`);
const filmStatisticsElement = document.querySelector(`.footer__statistics`);
render(filmStatisticsElement, Utils.createElement(new Statistics()), `beforeend`);

const showMoreButton = document.querySelector(`.films-list__show-more`);
let showingCards = CARDS_COUNT;
// films.slice(0, showingCards)
//   .forEach((movie) => render(cardWrapperElement, Utils.createElement(new FilmCardTemplate(movie)), `beforeend`));

showMoreButton.addEventListener(`click`, () => {
  const existingCards = showingCards;
  showingCards = showingCards + CARDS_COUNT;
  films.slice(existingCards, showingCards)
    .forEach((movie) => render(cardWrapperElement, Utils.createElement(new FilmCardTemplate(movie)), `beforeend`));

  if (showingCards >= films.length) {
    showMoreButton.remove();
  }
});
