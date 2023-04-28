import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._container.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
  }

  _getInputValues() {
    const formData = new FormData(this._form);
    let values = {};
    for (const pair of formData.entries()) {
      values[pair[0]] = pair[1];
    }
    return values;
  }

  setInputValues(values) {
    Object.keys(values).forEach((key) => {
      this._form.elements[key].value = values[key];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit.bind(this));
  }

  close() {
    super.close();
    this._form.reset();
  }
}
