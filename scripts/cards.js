import { openPopup } from './index.js';

export class Card {
  static _zoomPopup = document.querySelector('.popup_zoom');
  static _zoomPhoto = document.querySelector('.popup__photo');
  static _zoomTitle = document.querySelector('.popup__photo-title');

  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
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

    this._element
      .querySelector('.button-like')
      .addEventListener('click', (evt) => {
        evt.target.classList.toggle('button-like_active');
      });

    this._element
      .querySelector('.button-delete')
      .addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
      });

    return this._element;
  }
}
