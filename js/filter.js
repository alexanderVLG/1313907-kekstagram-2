import { renderPictures } from './render';

const COUNT = 10;
const TIMEOUT_DELAY = 500;

const imageFilters = document.querySelector('.img-filters');
const filterButtons = imageFilters.querySelectorAll('button');

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
const getDefaultPictures = (pictures) => pictures;

const getRandomPictures = (pictures) => {
  const shuffled = pictures.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(COUNT, shuffled.length));
};

const getDiscussedPictures = (pictures) => pictures.slice().sort((a, b) => b.likes - a.likes);

const debouncedRender = debounce(renderPictures);

const filterMap = {
  'filter-default': getDefaultPictures,
  'filter-random': getRandomPictures,
  'filter-discussed': getDiscussedPictures
};

const onFilterButtonClick = (evt, pictures) => {
  const button = evt.target;
  filterButtons.forEach((btn) => btn.classList.remove('img-filters__button--active'));
  button.classList.add('img-filters__button--active');
  const filterFunction = filterMap[button.id] || getDefaultPictures;
  debouncedRender(filterFunction(pictures));
};

const showFilters = (pictures) => {
  imageFilters.classList.remove('img-filters--inactive');
  renderPictures(pictures);
  imageFilters.addEventListener('click', (evt) => onFilterButtonClick(evt, pictures));
};

export {showFilters};
