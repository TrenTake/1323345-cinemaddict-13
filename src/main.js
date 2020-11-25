import {createProfileTemplate} from `/view/profile.js`;
import {createMainNavigationTemplate} from '/view/navigation.js';
import {createSortTemplate} from '/view/sort.js';
import {createFilmDetailsTemplate} from '/view/details.js';
import {createShowMoreButtonTemplate} from '/view/show-button.js';
import {createFilmCardTemplate} from '/view/card.js';


const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const filmContainerElement = bodyElement.querySelector(`.films-list`);
const filmsListElement = filmContainerElement.querySelector(`.films-list__container`);
const filmsExtraListElements = bodyElement.querySelectorAll(`.films-list--extra`);

render(headerElement, createProfileTemplate(), `afterbegin`);
render(mainElement, createMainNavigationTemplate(), `afterbegin`);
render(mainElement, createSortTemplate(), `afterbegin`);
render(filmContainerElement, createShowMoreButtonTemplate(), `afterbegin`);
for (card of CARDS_COUNT) {
  render(filmsListElement, createFilmCardTemplate(), `afterbegin`);
}

for (card of EXTRA_CARDS_COUNT) {
  render(filmsExtraListElements[0].querySelector(`.films-list__container`), createFilmCardTemplate(), `afterbegin`);
}

for (card of EXTRA_CARDS_COUNT) {
  render(filmsExtraListElements[1].querySelector(`.films-list__container`), createFilmCardTemplate(), `afterbegin`);
}

render(bodyElement, createFilmDetailsTemplate(), `afterbegin`);
