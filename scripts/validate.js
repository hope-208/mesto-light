/*
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-submit',
  inactiveButtonClass: 'button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});*/

/*
// валидация ввода в поле

const input = document.querySelector('#input');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт

input.addEventListener('keydown', function (evt) {
  // Проверяем, была ли введена цифра
    if (Number.isNaN(Number(evt.key))) {
    // Если пользователь ввёл не цифру, показываем блок с ошибкой
    error.style.display = 'block';
    };
});



// отправить форму нажатием на клавишу Enter


function keyHandlerEditPopup(evt) {
  if (evt.key === 'Enter') {
    handleFormSubmit(nameInput.value, jobInput.value);
  }
}
nameInput.addEventListener('keydown', keyHandlerEditProfile);
jobInput.addEventListener('keydown', keyHandlerEditProfile);

function keyHandlerAddPopup(evt) {
  if (evt.key === 'Enter') {
    handleFormPhotoSubmit(titlePhotoInput.value, linkPhotoInput.value);
  }
}
titlePhotoInput.addEventListener('keydown', keyHandlerAddPopup);
linkPhotoInput.addEventListener('keydown', keyHandlerAddPopup);


При нажатии на кнопку происходит событие submit. Оно же происходит и при нажатии Enter,
если пользователь находится в одном из полей формы. Поэтому дополнительные обработчики нажатия клавиш
для сабмита делать не нужно.

--------------
*/
