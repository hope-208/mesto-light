import { openPopup } from './index.js';

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

export class Card {
  static _zoomPopup = document.querySelector('.popup_zoom');
  static _zoomPhoto = document.querySelector('.popup__photo');
  static _zoomTitle = document.querySelector('.popup__photo-title');

  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card-template')
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _popupZoomOpen() {
    Card._zoomPhoto.setAttribute('src', this._link);
    Card._zoomPhoto.setAttribute('alt', this._name);
    Card._zoomTitle.textContent = this._name;

    openPopup(Card._zoomPopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__cover').src = this._link;
    this._element.querySelector('.element__cover').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    this._element
      .querySelector('.element__cover')
      .addEventListener('click', () => {
        this._popupZoomOpen();
      });

    return this._element;
  }
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});
