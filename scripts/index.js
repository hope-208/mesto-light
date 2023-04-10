import { Card } from './cards.js';

import { FormValidator } from './validate.js';

const settings = {
  inputSelector: '.form__input',
  submitButtonSelector: '.button-submit',
  inactiveButtonClass: 'button-submit_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'error_active',
  errorSpanPostfix: '-error',
};
const popups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addPhotoPopup = document.querySelector('.popup_add-photo');

const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const editPopup = document.querySelector('.button-edit');
const addPopup = document.querySelector('.button-add');

const cardsContainer = document.querySelector('.elements');

const profileForm = document.forms.profile;
const profileName = profileForm.elements.login;
const profileJob = profileForm.elements.job;

const photoForm = document.forms.formAddPhoto;
const photoTitle = photoForm.elements.title;
const photoLink = photoForm.elements.link;

let profileFormValidation = new FormValidator(settings, profileForm);
profileFormValidation.enableValidation();

let photoFormValidation = new FormValidator(settings, photoForm);
photoFormValidation.enableValidation();

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeKey);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('button-close')) {
      closePopup(popup);
    }
  });
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = profileName.value;
  jobProfile.textContent = profileJob.value;
  closePopup(editProfilePopup);
}

function handleFormPhotoSubmit(evt) {
  evt.preventDefault();

  const captionAddPhoto = photoTitle.value;
  const coverAddPhoto = photoLink.value;

  const newCard = {
    name: captionAddPhoto,
    link: coverAddPhoto,
  };

  addCard(newCard);
  closePopup(addPhotoPopup);
}

function addCard(item) {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
}

editPopup.addEventListener('click', function () {
  profileName.value = nameProfile.textContent;
  profileJob.value = jobProfile.textContent;
  profileFormValidation.resetErrors();
  openPopup(editProfilePopup);
});

addPopup.addEventListener('click', function () {
  photoForm.reset();
  openPopup(addPhotoPopup);
  photoFormValidation.resetErrors();
});

profileForm.addEventListener('submit', handleFormSubmit);

photoForm.addEventListener('submit', handleFormPhotoSubmit);

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('button-like')) {
    evt.target.classList.toggle('button-like_active');
  }

  if (evt.target.classList.contains('button-delete')) {
    evt.target.closest('.element').remove();
  }
});
