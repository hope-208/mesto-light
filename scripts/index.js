import { initialCards } from '../scripts/cards.js';

const container = document.querySelector('.container');

// все попапы
const popup = document.querySelectorAll('.popup');

// инпуты попапов
let nameInput = document.querySelector('.form__input_type-name');
let jobInput = document.querySelector('.form__input_type-job');

// данные профиля
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

// инпуты всех попапов и форм
const input = document.querySelectorAll('form__input');

// кнопки
const closeButton = document.querySelector('.button-close');
const createProfile = document.querySelector('.button-submit_edit-profile');
const createCard = document.querySelector('.button-submit_add-photo');
const createLike = document.querySelector('.button-like');
const deleteButton = document.querySelector('.button-delete');

// зуум
const zoomPopup = document.querySelector('.popup_zoom');
const zoomPhoto = document.querySelector('.popup__photo');
const zoomTitle = document.querySelector('.popup__photo-title');
const closeZoomButton = zoomPopup.querySelector('.button-close-zoom');


// формы
const formElementProfile = document.querySelector('.form_edit-profile');
const formElementPhoto = document.querySelector('.form_add-photo');
const titlePhotoInput = document.querySelector('.form__input_photo-title');
const linkPhotoInput = document.querySelector('.form__input_photo-link');

// шаблон карточки
const cardsTemplate = document.querySelector('.card-template').content;
const cardsContainer = container.querySelector('.elements');
const coverPhoto = document.querySelector('.element__cover');
const coverTitle = document.querySelector('.element__title');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  ;}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  input.value = '';
  /*nameInput.value = '';
  jobInput.value = '';*/
}

function openZoomPopup() {
  zoomPopup.classList.add('popup_opened-zoom');
  zoomPhoto.setAttribute('src', element.link);
  zoomTitle.textContent = element.name;
  closeZoomButton.addEventListener('click', closeZoomPopup(zoomPopup));
}


function closeZoomPopup(zoomPopup) {
zoomPopup.classList.remove('popup_opened-zoom');
}


function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfileClose();
}

function createCard(element) {
  const cardsOnPage = cardsTemplate.cloneNode(true);

  /*const likeButton = cardsOnPage.querySelector('.button-like');
  const deleteButton = cardsOnPage.querySelector('.button-delete');*/


  coverPhoto.setAttribute('src', element.link);
  coverTitle.textContent = element.name;


  createLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('button-like_active');
  });

  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });



  coverPhoto.addEventListener('click', openZoomPopup);


  //coverPhoto.addEventListener('click', () => popupZoomOpen(element));


  return cardsOnPage;
}





/*initialCards.forEach(addCard);
initialCards.forEach(function (element) {
  const card = createCard(element);
  cardsContainer.prepend(card);
});*/

function handleFormPhotoSubmit(evt) {
  evt.preventDefault();

  const captionAddPhoto = titlePhotoInput.value;
  const coverAddPhoto = linkPhotoInput.value;

  const newCard = {
    name: captionAddPhoto,
    link: coverAddPhoto,
  };

  addCard(newCard, cardsContainer);
  closePopup();
}

function addCard(element, cardsContainer, initialCards) {
  const card = createCard(element);
  cardsContainer.prepend(card);
  initialCards.forEach(element);
}
/*
closeZoomButton.addEventListener('click', function () {
  popupZoomClose(zoomPopup);
});*/

createProfile.addEventListener('click', openPopup);

formElementProfile.addEventListener('submit', handleFormProfileSubmit);

closeButton.addEventListener('click', closePopup);

createCard.addEventListener('click', openPopup);

formElementPhoto.addEventListener('submit', handleFormPhotoSubmit);

coverPhoto.addEventListener('click', () => popupZoomOpen(element));
closeZoomButton.addEventListener('click', () => closeZoomPopup(zoomPopup));


