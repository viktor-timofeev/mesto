import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
  super(popupSelector);
  super.setEventListeners();
}

  open() {
    /*this._popup.querySelector('.popup__image').src = this._link;
    this._popup.querySelector('.popup__image').alt = this._name;
    this._popup.querySelector('.popup__image').textContent = this._name;*/
    super.open();
  }
}    