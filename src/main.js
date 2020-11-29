import {createProfileTemplate} from './view/profile';
import {createMainNavigationTemplate} from './view/navigation';
import {createSortTemplate} from './view/sort';
import {createFilmDetailsTemplate} from './view/details';
import {createShowMoreButtonTemplate} from './view/show-button';
import {createFilmCardTemplate} from './view/card';
import {createFilmContainerTemplate} from './view/container';
import {createStatisticsTemplate} from './view/statistics';

const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.body.querySelector(`.header`);
render(headerElement, createProfileTemplate(), `beforeend`);
const mainElement = document.body.querySelector(`.main`);
render(mainElement, createMainNavigationTemplate(), `beforeend`);
render(mainElement, createSortTemplate(), `beforeend`);
render(mainElement, createFilmContainerTemplate(), `beforeend`);
const filmsExtraListElements = document.body.querySelectorAll(`.films-list--extra`);

const filmContainerElement = document.body.querySelector(`.films-list`);
const cardWrapperElement = document.querySelector(`.films-list .films-list__container`);
for (let i = 1; i <= CARDS_COUNT; i++) {
  render(cardWrapperElement, createFilmCardTemplate(), `beforeend`);
}

for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(filmsExtraListElements[0].querySelector(`.films-list__container`), createFilmCardTemplate(), `beforeend`);
}

for (let i = 1; i <= EXTRA_CARDS_COUNT; i++) {
  render(filmsExtraListElements[1].querySelector(`.films-list__container`), createFilmCardTemplate(), `beforeend`);
}

render(filmContainerElement, createShowMoreButtonTemplate(), `beforeend`);
const filmStatisticsElement = document.body.querySelector(`.footer__statistics`);
render(filmStatisticsElement, createStatisticsTemplate(), `beforeend`);
// render(document.body, createFilmDetailsTemplate(), `beforeend`);
