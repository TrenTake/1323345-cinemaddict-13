import {createProfileTemplate} from './view/profile';
import {createMainNavigationTemplate} from './view/navigation';
import {createSortTemplate} from './view/sort';
// import {createFilmDetailsTemplate} from './view/details';
import {createShowMoreButtonTemplate} from './view/show-button';
import {createFilmCardTemplate} from './view/card';
import {createFilmContainerTemplate} from './view/container';
import {createStatisticsTemplate} from './view/statistics';
import {generateFilmCards} from './mock/movie-card';

const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;
const FILMS_COUNT = 20;

const films = generateFilmCards(FILMS_COUNT);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.header`);
render(headerElement, createProfileTemplate(), `beforeend`);
const mainElement = document.querySelector(`.main`);
render(mainElement, createMainNavigationTemplate(), `beforeend`);
render(mainElement, createSortTemplate(), `beforeend`);
render(mainElement, createFilmContainerTemplate(), `beforeend`);
const filmsExtraListElements = document.querySelectorAll(`.films-list--extra`);

const filmContainerElement = document.querySelector(`.films-list`);
const cardWrapperElement = filmContainerElement.querySelector(`.films-list__container`);
for (let i = 1; i <= CARDS_COUNT; i++) {
  render(cardWrapperElement, createFilmCardTemplate(), `beforeend`);
}

const topRatedContainerElement = filmsExtraListElements[0].querySelector(`.films-list__container`);
for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(topRatedContainerElement, createFilmCardTemplate(), `beforeend`);
}

const mostCommentedContrainerElement = filmsExtraListElements[1].querySelector(`.films-list__container`);
for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(mostCommentedContrainerElement, createFilmCardTemplate(), `beforeend`);
}

render(filmContainerElement, createShowMoreButtonTemplate(), `beforeend`);
const filmStatisticsElement = document.querySelector(`.footer__statistics`);
render(filmStatisticsElement, createStatisticsTemplate(), `beforeend`);
// render(document.body, createFilmDetailsTemplate(), `beforeend`);

const showMoreButton = document.querySelector(`.films-list__show-more`);
let showingCards = CARDS_COUNT;
films.slice(0, showingCards)
  .forEach((movie) => render(cardWrapperElement, createFilmCardTemplate(movie), `beforeend`));

showMoreButton.addEventListener(`click`, () => {
  const existingCards = showingCards;
  showingCards = showingCards + CARDS_COUNT;
  films.slice(existingCards, showingCards)
    .forEach((movie) => render(cardWrapperElement, createFilmCardTemplate(movie), `beforeend`));

  if (showingCards >= films.length) {
    showMoreButton.remove();
  }
});
