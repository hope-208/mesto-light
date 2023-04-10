export class FormValidator {
  constructor(settings, element) {
    this._inputSelector = settings.inputSelector ?? '.form__input';
    this._submitButtonSelector =
      settings.submitButtonSelector ?? '.button-submit';
    this._inactiveButtonClass =
      settings.inactiveButtonClass ?? 'button-submit_disabled';
    this._inputErrorClass = settings.inputErrorClass ?? 'form__input-error';
    this._errorClass = settings.errorClass ?? 'error_active';
    this._errorSpanPostfix = settings.errorSpanPostfix ?? '-error';
    this._form = element;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(
      '.' + inputElement.id + this._errorSpanPostfix
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(
      '.' + inputElement.id + this._errorSpanPostfix
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    const thisObject = this;

    this._form.addEventListener('reset', function () {
      setTimeout(() => {
        thisObject._toggleButtonState(inputList, buttonElement); // проверка для кнопки срабатывает после очистки формы
      });
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        thisObject._checkInputValidity(inputElement);
        thisObject._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  resetErrors() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );

    const thisObject = this;

    inputList.forEach((inputElement) => {
      thisObject._hideInputError(inputElement);
    });
  }
}
