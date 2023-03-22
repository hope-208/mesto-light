import { initialCards } from '../scripts/cards.js';

let nameInput = document.querySelector('.form__input_type-name');
let jobInput = document.querySelector('.form__input_type-job');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

const input = document.querySelectorAll('form__input');
const editProfileButton = document.querySelector('.button-edit');
const formElementProfile = document.querySelector('.form_edit-profile');
const popup = document.querySelectorAll('.popup');
const popupButtonProfileClose = document.querySelector('.button-close_edit-profile');
const closeButton = document.querySelector('.button-close');
const addPhotoButton = document.querySelector('.button-add');
const formElementPhoto = document.querySelector('.form_add-photo');
const titlePhotoInput = document.querySelector('.form__input_photo-title');
const linkPhotoInput = document.querySelector('.form__input_photo-link');

const container = document.querySelector('.container');
const cardsContainer = container.querySelector('.elements');
const cardItem = container.querySelector('.element');
const openPopupPhoto = container.querySelector('.button-add');
const createCardsButton = container.querySelector('.button-submit_add-photo');
const cardsTemplate = document.querySelector('.card-template').content;
const zoomPopup = document.querySelector('.popup_zoom');
const closeZoomButton = zoomPopup.querySelector('.button-close-zoom');
const popupZoomPhoto = zoomPopup.querySelector('.popup__photo');
  const popupZoomTitle = zoomPopup.querySelector('.popup__photo-title');

  const coverPhoto = document.querySelector('.element__cover');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  input.value = '';
}
function closeZoomPopup(zoomPopup) {
zoomPopup.classList.remove('popup_opened-zoom');
}

/*
function popupProfileOpen() {
  editPopupProfile.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


function popupProfileClose() {
  editPopupProfile.classList.remove('popup_opened');
}*/

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfileClose();
}

function createCard(element) {
  const cardsOnPage = cardsTemplate.cloneNode(true);
  const captionPhoto = cardsOnPage.querySelector('.element__title');
//  const coverPhoto = cardsOnPage.querySelector('.element__cover');

  const likeButton = cardsOnPage.querySelector('.button-like');
  const deleteButton = cardsOnPage.querySelector('.button-delete');

  captionPhoto.textContent = element.name;
  coverPhoto.setAttribute('src', element.link);



  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('button-like_active');
  });

  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });



  coverPhoto.addEventListener('click', popupZoomOpen);


  coverPhoto.addEventListener('click', () => popupZoomOpen(element));


  return cardsOnPage;
}

function popupZoomOpen() {
  zoomPopup.classList.add('popup_opened-zoom');
  popupZoomPhoto.setAttribute('src', element.link);
  popupZoomTitle.textContent = element.name;
  /*closeZoomButton.addEventListener('click', function () {
    popupZoomClose(zoomPopup);
  });*/
}




function popupZoomClose(zoomPopup) {
  zoomPopup.classList.remove('popup_opened-zoom');
}

initialCards.forEach(addCard());
/*initialCards.forEach(function (element) {
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

function addCard(element, cardsContainer) {
  const card = createCard(element);
  cardsContainer.prepend(card);
}
/*
closeZoomButton.addEventListener('click', function () {
  popupZoomClose(zoomPopup);
});*/

editProfileButton.addEventListener('click', openPopup);

formElementProfile.addEventListener('submit', handleFormProfileSubmit);

closeButton.addEventListener('click', closePopup);

addPhotoButton.addEventListener('click', openPopup);

formElementPhoto.addEventListener('submit', handleFormPhotoSubmit);

coverPhoto.addEventListener('click', () => popupZoomOpen(element));
closeZoomButton.addEventListener('click', () => popupZoomClose(zoomPopup));


