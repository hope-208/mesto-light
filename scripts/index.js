let editProfileButton = document.querySelector('.button_type_edit');
let editPopup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.button_type_close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

function popupOpen() {
  editPopup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function popupClose() {
  editPopup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupClose();
}

editProfileButton.addEventListener('click', popupOpen);

formElement.addEventListener('submit', handleFormSubmit);

popupButtonClose.addEventListener('click', popupClose);
