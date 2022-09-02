export class Card {
  constructor({ title, link }, templateSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    this._like = this._element.querySelector('.elements__like');
    this._image = this._element.querySelector('.elements__image');

  }

  generate = (container) => {
    this._image.src = this._link;
    this._image.alt = this._title;
    this._element.querySelector('.elements__title').textContent = this._title;
    this._setEventListeners();
    return this._element;
  }

  _handleImageClick() {
    this._handleCardClick({ title: this._title, link: this._link });
  }

  _setEventListeners() {
    this._like.addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.elements__trash').addEventListener('click', this._handleDeleteCard);
    this._image.addEventListener('click', () => this._handleCardClick(this._title, this._link));
  }

  _handleLikeCard = () => {
    this._like.classList.toggle("elements__like_state_active");
  }

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }
}