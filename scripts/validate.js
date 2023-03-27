const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(
    '.' + inputElement.id + (settings.errorSpanPostfix ?? '-error')
  );
  inputElement.classList.add(settings.inputErrorClass ?? 'form__input-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass ?? 'error_active');
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(
    '.' + inputElement.id + (settings.errorSpanPostfix ?? '-error')
  );
  inputElement.classList.remove(
    settings.inputErrorClass ?? 'form__input-error'
  );
  errorElement.classList.remove(settings.errorClass ?? 'error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(
      inactiveButtonClass ?? 'button-submit_disabled'
    );
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(
      inactiveButtonClass ?? 'button-submit_disabled'
    );
    buttonElement.disabled = false;
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector ?? '.form__input')
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector ?? '.button-submit'
  );
  toggleButtonState(inputList, buttonElement, settings.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings.inactiveButtonClass);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(
    document.querySelectorAll(settings.formSelector ?? '.form')
  );
  formList.forEach((formElement) => {
    const fieldsetList = Array.from(
      formElement.querySelectorAll(settings.fieldsetSelector ?? '.form__set')
    );
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, settings);
    });
  });
};
