import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.setEventListeners();
  }

  open(card) {
    const zoomPhoto = this._container.querySelector('.popup__photo');
    const zoomTitle = this._container.querySelector('.popup__photo-title');
    zoomPhoto.setAttribute('src', card._link);
    zoomPhoto.setAttribute('alt', card._name);
    zoomTitle.textContent = card._name;
    super.open();
  }
}
