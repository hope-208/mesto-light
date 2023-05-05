import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.zoomPhoto = this._container.querySelector('.popup__photo');
    this.zoomTitle = this._container.querySelector('.popup__photo-title');
    this.setEventListeners();
  }

  open(card) {
    this.zoomPhoto.setAttribute('src', card._link);
    this.zoomPhoto.setAttribute('alt', card._name);
    this.zoomTitle.textContent = card._name;
    super.open();
  }
}
