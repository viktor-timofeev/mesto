export class Card {
	constructor(data, templateSelector, handleCardClick) {
    this._name = data.name; 
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; 
	}

   generate = (container) => {
    this._element = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
		this._element.querySelector('.elements__like').addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.elements__trash').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
		}

  _handleLikeCard = (evt) => {
    evt.target.classList.toggle("elements__like_state_active");
  }

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }	
}