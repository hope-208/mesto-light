const settings = {
  formSelector: '.form',
  fieldsetSelector: '.form__set',
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
const zoomPopup = document.querySelector('.popup_zoom');
const popupContainer = document.querySelector('.popup__container');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const editPopup = document.querySelector('.button-edit');
const addPopup = document.querySelector('.button-add');
const submitPopup = document.querySelector('.button-submit');
const closeEditProfile = document.querySelector('.button-close_edit-profile');
const closeAddPhoto = document.querySelector('.button-close_add-photo');
const closeZoom = document.querySelector('.button-close_zoom');
const createProfile = document.querySelector('.button-submit_edit-profile');
const createCardButton = document.querySelector('.button-submit_add-photo');
const zoomPhoto = document.querySelector('.popup__photo');
const zoomTitle = document.querySelector('.popup__photo-title');

const cardsTemplate = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.elements');

const profileForm = document.forms.profile;
const profileName = profileForm.elements.login;
const profileJob = profileForm.elements.job;

const photoForm = document.forms.formAddPhoto;
const photoTitle = photoForm.elements.title;
const photoLink = photoForm.elements.link;

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

enableValidation(settings);

function openPopup(popup) {
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

function createCard(element) {
  const card = cardsTemplate.cloneNode(true);
  const coverPhoto = card.querySelector('.element__cover');
  const coverTitle = card.querySelector('.element__title');

  coverPhoto.setAttribute('src', element.link);
  coverPhoto.setAttribute('alt', element.name);
  coverTitle.textContent = element.name;

  coverPhoto.addEventListener('click', () => popupZoomOpen(element));

  return card;
}

function popupZoomOpen(element) {
  zoomPhoto.setAttribute('src', element.link);
  zoomPhoto.setAttribute('alt', element.name);
  zoomTitle.textContent = element.name;

  openPopup(zoomPopup);
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

function addCard(element) {
  const card = createCard(element);
  cardsContainer.prepend(card);
}

initialCards.forEach(function (element) {
  addCard(element);
});

editPopup.addEventListener('click', function () {
  openPopup(editProfilePopup);
  profileName.value = nameProfile.textContent;
  checkInputValidity(profileForm, profileName, settings);
  profileJob.value = jobProfile.textContent;
  checkInputValidity(profileForm, profileJob, settings);
  toggleButtonState(
    [profileName, profileJob],
    createProfile,
    settings.inactiveButtonClass
  );
});

addPopup.addEventListener('click', function () {
  photoForm.reset();
  hideInputError(photoForm, photoTitle, settings);
  hideInputError(photoForm, photoLink, settings);
  openPopup(addPhotoPopup);
  toggleButtonState(
    [photoTitle, photoLink],
    createCardButton,
    settings.inactiveButtonClass
  );
});

closeEditProfile.addEventListener('click', function () {
  closePopup(editProfilePopup);
});

profileForm.addEventListener('submit', handleFormSubmit);

closeAddPhoto.addEventListener('click', function () {
  closePopup(addPhotoPopup);
});

closeZoom.addEventListener('click', function () {
  closePopup(zoomPopup);
});

photoForm.addEventListener('submit', handleFormPhotoSubmit);

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('button-like')) {
    evt.target.classList.toggle('button-like_active');
  }

  if (evt.target.classList.contains('button-delete')) {
    evt.target.closest('.element').remove();
  }
});
