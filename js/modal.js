import { renderComments, clearComments } from './render-comments.js';
import { onEscKeydown } from './utils.js';

const modalWindow = document.querySelector('.big-picture');
const closeButton = modalWindow.querySelector('.big-picture__cancel');
const modalImage = modalWindow.querySelector('.big-picture__img img');
const modalImageLikes = modalWindow.querySelector('.likes-count');
const commentTotalCount = modalWindow.querySelector('.social__comment-total-count');
const socialCaption = modalWindow.querySelector('.social__caption');

// Функция закрытия модального окна
const onButtonClick = () => {
  clearComments();

  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');

  // удаляет обработчики
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onButtonClick);
};

function onDocumentKeydown (evt) {
  onEscKeydown(evt, onButtonClick);
}

// Функция открытия модального окна
const openPhotoModal = (pictureId, photos) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));
  if (!currentPhoto) {
    return;
  }

  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Заполняем данными
  modalImage.src = currentPhoto.url;
  modalImageLikes.textContent = currentPhoto.likes;
  commentTotalCount.textContent = currentPhoto.comments.length;
  socialCaption.textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);

  // Добавляем обработчики
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onButtonClick);
};

export { openPhotoModal, onButtonClick};
