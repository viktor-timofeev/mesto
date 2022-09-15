export class Card {
  constructor({ data, handleCardClick, handleLikeCard, handleDeleteCard }, templateSelector) {
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.currentUserId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._templateSelector = templateSelector;
    this._element = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    this._like = this._element.querySelector('.elements__like');
    this._image = this._element.querySelector('.elements__image');
    this._trash = this._element.querySelector('.elements__trash');
    this._title = this._element.querySelector('.elements__title');
  }

  generate() {
  //  this._image.src = this._link;
  //  this._image.alt = this._text;

    this._element = this._getTemplate();
    this._updateLikesView;
    this._setEventListeners();
    this._trash.classList.add(this._userId === this._ownerId ? 'card__delete-button_visible': 'card__delete-button_invisible');
    this._title.textContent = this._text;
    return this._element;
  }

  _handleImageClick() {
    this._handleCardClick({ title: this._text, link: this._link });
  }

  _updateLikesView() {

  }

  _setEventListeners() {
    this._like.addEventListener('click', this._handleLikeCard(this));
    this._trash.addEventListener('click', this._handleDeleteCard(this));
    this._image.addEventListener('click', () => this._handleCardClick(this._title, this._link));
  }

  _handleLikeCard = () => {
    this._like.classList.toggle("elements__like_state_active");
  }

  removeCard = () => {
    this._element.remove();
    this._element = null;
  }
}