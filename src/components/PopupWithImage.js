import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
  super(popupSelector);
  this._popup = document.querySelector(this._popupSelector);
}

  open(item) {
    this._popup.querySelector('.popup__image').src = item.link;
    this._popup.querySelector('.popup__image').alt = item.title;
    this._popup.querySelector('.popup__image-caption').textContent = item.title;
    super.open();
  }
}