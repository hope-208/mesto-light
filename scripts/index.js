let editProfileButton = document.querySelector('.button_name-edit');
let editPopup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.button_name-close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.input_field-name');
let jobInput = document.querySelector('.input_field-job');
let nameProfile = document.querySelector('.info__title');
let jobProfile = document.querySelector('.info__subtitle');

function popupOpen() {
  editPopup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  console.log(nameInput);
  jobInput.value = jobProfile.textContent;
  console.log(jobInput);
}

function popupClose() {
  editPopup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  console.log(nameProfile);
  jobProfile.textContent = jobInput.value;
  console.log(jobProfile);

  popupClose();
}

editProfileButton.addEventListener('click', popupOpen);

formElement.addEventListener('submit', handleFormSubmit);

popupButtonClose.addEventListener('click', popupClose);
