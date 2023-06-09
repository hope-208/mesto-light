import '../pages/index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  settings,
  profileForm,
  photoForm,
  editPopupButton,
  addPopupButton,
} from '../utils/constants.js';

import { FormValidator } from '../components/FormValidator.js';

const profileFormValidation = new FormValidator(settings, profileForm);
profileFormValidation.enableValidation();

const photoFormValidation = new FormValidator(settings, photoForm);
photoFormValidation.enableValidation();

const zoomPopup = new PopupWithImage('.popup_zoom');

const profile = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
});

const editProfilePopup = new PopupWithForm(
  '.popup_edit-profile',
  (inputValues) => {
    profile.setUserInfo({
      newName: inputValues.login,
      newJob: inputValues.job,
    });
  }
);

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.card-template', () => {
        zoomPopup.open(card);
      });
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  '.elements'
);

cardList.renderItems();

function createCard(item) {
  const card = new Card(item, '.card-template', () => {
    zoomPopup.open(card);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const addPhotoPopup = new PopupWithForm('.popup_add-photo', (inputPhoto) => {
  const newCard = {
    name: inputPhoto.title,
    link: inputPhoto.link,
  };
  cardList.addItem(createCard(newCard));
});

editPopupButton.addEventListener('click', () => {
  const profileValues = profile.getUserInfo();

  editProfilePopup.setInputValues({
    login: profileValues.nameProfile,
    job: profileValues.jobProfile,
  });
  profileFormValidation.resetErrors();
  editProfilePopup.open();
  profileFormValidation.toggleButtonState();
});

addPopupButton.addEventListener('click', () => {
  addPhotoPopup.open();
  photoFormValidation.resetErrors();
  photoFormValidation.toggleButtonState();
});
