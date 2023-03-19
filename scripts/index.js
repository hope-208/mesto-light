// Попап профиля

// открытие попапа профиля
let editProfileButton = document.querySelector('.button__edit');
let editPopupProfile = document.querySelector('.popup_edit-profile');
let popupAddPhoto = document.querySelector('.popup_add-photo');
let formElementProfile = document.querySelector('.form_edit-profile');
let nameInput = document.querySelector('.form__input_type-name');
let jobInput = document.querySelector('.form__input_type-job');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let popupButtonProfileClose = document.querySelector(
  '.button__close_edit-profile'
);

// открыть попап
function popupProfileOpen() {
  editPopupProfile.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

// закрыть попап профиля
function popupProfileClose() {
  editPopupProfile.classList.remove('popup_opened');
}

// заменить данные профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfileClose();
}

// отслеживание действий с кнопками попапа профиля
editProfileButton.addEventListener('click', popupProfileOpen);

formElementProfile.addEventListener('submit', handleFormProfileSubmit);

popupButtonProfileClose.addEventListener('click', popupProfileClose);

// Попап фото

const container = document.querySelector('.container'); // елементы на странице
const cardsContainer = container.querySelector('.elements'); // блок с карточками
const cardItem = container.querySelector('.element'); // карточка
const openPopupPhoto = container.querySelector('.button__add'); // кнопка открытия попапа добавления фото
const createCardsButton = container.querySelector('.button__submit_add-photo'); // создать карточку
let closePhotoButton = document.querySelector('.button__close_add-photo'); // закрыть попап добавления фото
const cardsTemplate = document.querySelector('.card-template').content; // шаблон
const zoomPopup = document.querySelector('.popup_zoom');

// массив с карточками
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

function createCard(element) {
  const cardsOnPage = cardsTemplate.cloneNode(true);
  const captionPhoto = cardsOnPage.querySelector('.element__title');
  const coverPhoto = cardsOnPage.querySelector('.element__cover');
  // добавить карточку
  captionPhoto.textContent = element.name;
  coverPhoto.setAttribute('src', element.link);
  coverPhoto.setAttribute('alt', element.name);

  const popupZoomPhoto = zoomPopup.querySelector('.popup__photo');
  const popupZoomTitle = zoomPopup.querySelector('.popup__photo-title');
  popupZoomPhoto.setAttribute('src', element.link);
  popupZoomPhoto.setAttribute('alt', element.name);
  popupZoomTitle.textContent = element.name;

  // поставить лайк
  const likeButton = cardsOnPage.querySelector('.button__like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('button__like_active');
  });

  // удалить карточку
  const deleteButton = cardsOnPage.querySelector('.button__delete');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  zoomPopup.classList.remove('popup_opened-zoom');

  // увеличить фото
  coverPhoto.addEventListener('click', popupZoomOpen);

  return cardsOnPage;
}

//
// увеличить фото
function popupZoomOpen() {
  zoomPopup.classList.add('popup_opened-zoom');
}

// выйти из увеличения
function popupZoomClose() {
  zoomPopup.classList.remove('popup_opened-zoom');
}

const closeZoomButton = zoomPopup.querySelector('.button__close-zoom');
closeZoomButton.addEventListener('click', function () {
  popupZoomClose(zoomPopup);
});

initialCards.forEach(function (element) {
  const card = createCard(element);
  cardsContainer.prepend(card);
});

// добавление фотографии
let addPhotoButton = document.querySelector('.button__add');
let formElementPhoto = document.querySelector('.form_add-photo');
let titlePhotoInput = document.querySelector('.form__input_photo-title');
let linkPhotoInput = document.querySelector('.form__input_photo-link');

// открыть попап добавления фото
function popupAddPhotoOpen() {
  popupAddPhoto.classList.add('popup_opened');
}

// закрыть попап добавления фото
function popupAddPhotoClose() {
  popupAddPhoto.classList.remove('popup_opened');
}

// добавить новую карточку на страницу
function handleFormPhotoSubmit(evt) {
  evt.preventDefault();

  const captionAddPhoto = titlePhotoInput.value;
  const coverAddPhoto = linkPhotoInput.value;

  const newCard = {
    name: captionAddPhoto,
    link: coverAddPhoto,
    alt: captionAddPhoto,
  };

  addCard(newCard, cardsContainer);
  popupAddPhotoClose();
}

function addCard(element, cardsContainer) {
  const card = createCard(element);
  cardsContainer.prepend(card);
}

// отслеживание действий с кнопками попапа добавления фото
addPhotoButton.addEventListener('click', popupAddPhotoOpen);

formElementPhoto.addEventListener('submit', handleFormPhotoSubmit);

closePhotoButton.addEventListener('click', popupAddPhotoClose);
