const titles = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`];
const posters = [`the-dance-of-life.jpg`, `sagebrush-trail.jpg`, `the-man-with-the-golden-arm.jpg`, `santa-claus-conquers-the-martians.jpg`, `popeye-meets-sinbad.png`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];
const actors = [`Tom Hardy`, `Joseph Gordon-Levitt`, `Megan Fox`, `Yvonne Strahovski`];
const countries = [`USA`, `UK`, `Russia`];
const directors = [`Alfred Hitchcock`, `Steven Spielberg`, `Quentin Tarantino`];
const writers = [`Robert Towne`, `Francis Ford Coppola`, `Richard Stuart Linklater`];
const ages = [`18`, `6`, `12`];
const durations = [`1h 20m`, `2h 15m`, `1h 45m`];
const isBoolean = [`true`, `false`];

// const MAX_DESCRIPTION_LENGTH = 140;

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`];

const comments = [{
  text: `Great movie!`,
  author: `Asher James`,
  emoji: `smile`,
  day: `2020/12/03 23:59`
}, {
  text: `Boooring`,
  author: `Peter McLaughlin`,
  emoji: `sleeping`,
  day: `3 days ago`
}, {
  text: `So sweet`,
  author: `Francis Williams`,
  emoji: `cry`,
  day: `2 days ago`
}, {
  text: `Don't waste your time watching this movie`,
  author: `David Stevenson`,
  emoji: `angry`,
  day: `Today`
}, {
  text: `I haven't watched yet`,
  author: `Jessy Luis`,
  emoji: `bewilderment`,
  day: `2020/12/14 23:59`
}];

/**
 *
 * @param {*} min
 * @param {*} max
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getNewArray = (ar) => {
  const array = [];
  const newLength = ar.length - 4;
  const j = getRandomInt(0, newLength);
  for (let i = j; i <= j + getRandomInt(0, 5); i++) {
    array.push(ar[i]);
  }
  return array;
};

const generateFilmCard = () => {
  return {
    title: titles[getRandomInt(0, titles.length - 1)],
    ageRating: ages[getRandomInt(0, ages.length - 1)],
    director: directors[getRandomInt(0, directors.length - 1)],
    writers: getNewArray(writers).join(`, `).toString(),
    actors: getNewArray(actors).join(`, `).toString(),
    rating: getRandomInt(1, 10),
    // date: ,
    genreNames: getNewArray(genres)[0],
    poster: posters[getRandomInt(0, posters.length - 1)],
    description: getNewArray(descriptions).join(` `).toString(),
    country: countries[getRandomInt(0, countries.length - 1)],
    comments: getNewArray(comments),
    isFavorite: isBoolean[getRandomInt(0, isBoolean.length - 1)],
    isHistory: isBoolean[getRandomInt(0, isBoolean.length - 1)],
    isWatchlist: isBoolean[getRandomInt(0, isBoolean.length - 1)],
    duration: durations[getRandomInt(0, durations.length - 1)],
  };
};

const generateFilmCards = (count) => {
  return Array.from({length: count}, generateFilmCard);
};

const getRandomMovie = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

export {generateFilmCards, getRandomMovie};
