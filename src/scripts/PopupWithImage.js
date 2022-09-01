import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
  super(popupSelector);
  this._popup = document.querySelector(this._popupSelector);
}

  open(link, name) {
    this._popup.querySelector('.popup__image').src = link;
    this._popup.querySelector('.popup__image').alt = name;
    this._popup.querySelector('.popup__image-caption').textContent = name;
    super.open();
  }
}