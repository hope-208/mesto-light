export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('button-like_active');
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    const elementCover = this._element.querySelector('.element__cover');
    elementCover.src = this._link;
    elementCover.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._likeButton = this._element.querySelector('.button-like');
    this._deleteButton = this._element.querySelector('.button-delete');

    elementCover.addEventListener('click', () => this._handleCardClick());

    this._likeButton.addEventListener('click', () => this._handleLikeClick());

    this._deleteButton.addEventListener('click', () =>
      this._handleDeleteClick()
    );

    return this._element;
  }
}
