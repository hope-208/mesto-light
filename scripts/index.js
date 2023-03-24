const popups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addPhotoPopup = document.querySelector('.popup_add-photo');
const zoomPopup = document.querySelector('.popup_zoom');
const input = document.querySelectorAll('form__input');
const editFormProfile = document.querySelectorAll('form_edit-profile');
const nameInput = document.querySelector('.form__input_type-name');
const jobInput = document.querySelector('.form__input_type-job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const editPopup = document.querySelector('.button-edit');
const addPopup = document.querySelector('.button-add');
const closeEditProfile = document.querySelector('.button-close_edit-profile');
const closeAddPhoto = document.querySelector('.button-close_add-photo');
const closeZoom = document.querySelector('.button-close_zoom');
const createProfile = document.querySelector('.button-submit_edit-profile');
const createCardButton = document.querySelector('.button-submit_add-photo');
const zoomPhoto = document.querySelector('.popup__photo');
const zoomTitle = document.querySelector('.popup__photo-title');
const formElementProfile = document.querySelector('.form_edit-profile');
const formElementPhoto = document.querySelector('.form_add-photo');
const titlePhotoInput = document.querySelector('.form__input_photo-title');
const linkPhotoInput = document.querySelector('.form__input_photo-link');
const cardsTemplate = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(editProfilePopup);

  nameInput.value = '';
  jobInput.value = '';
}

function createCard(element) {
  const card = cardsTemplate.cloneNode(true);
  const coverPhoto = card.querySelector('.element__cover');
  const coverTitle = card.querySelector('.element__title');
  const createLike = card.querySelector('.button-like');
  const deleteButton = card.querySelector('.button-delete');

  coverPhoto.setAttribute('src', element.link);
  coverPhoto.setAttribute('alt', element.name);
  coverTitle.textContent = element.name;

  createLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('button-like_active');
  });

  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

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

  const captionAddPhoto = titlePhotoInput.value;
  const coverAddPhoto = linkPhotoInput.value;

  const newCard = {
    name: captionAddPhoto,
    link: coverAddPhoto,
  };

  addCard(newCard);
  closePopup(addPhotoPopup);

  titlePhotoInput.value = '';
  linkPhotoInput.value = '';
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
});

addPopup.addEventListener('click', function () {
  openPopup(addPhotoPopup);
});

closeEditProfile.addEventListener('click', function () {
  closePopup(editProfilePopup);
  nameInput.value = '';
  jobInput.value = '';
});

closeAddPhoto.addEventListener('click', function () {
  closePopup(addPhotoPopup);
  titlePhotoInput.value = '';
  linkPhotoInput.value = '';
});

closeZoom.addEventListener('click', function () {
  closePopup(zoomPopup);
});

formElementProfile.addEventListener('submit', handleFormSubmit);

formElementPhoto.addEventListener('submit', handleFormPhotoSubmit);
