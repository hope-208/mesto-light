let editProfileButton = document.querySelector('.profile__info_button-edit');
console.log(editProfileButton);

let editPopup = document.querySelector('.popup');
console.log(editPopup);

editProfileButton.addEventListener('click', function () {
  editPopup.classList.add('popup_opened');
  console.log(editPopup);
});

let popupButtonClose = document.querySelector('.popup__container_button-close');
console.log(popupButtonClose);

popupButtonClose.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
  console.log(editPopup);
});

let formElement = document.querySelector('.popup__container');
console.log(formElement);
let nameInput = document.querySelector('.popup__form_input-name');
console.log(nameInput);
let jobInput = document.querySelector('.popup__form_input-about');
console.log(jobInput);

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameProfile = document.querySelector(
    '.profile__info .profile__info_title'
  );
  let jobProfile = document.querySelector(
    '.profile__info .profile__info_subtitle'
  );

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  editPopup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
