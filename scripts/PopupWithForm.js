import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    super.setEventListeners();
    this._popup = document.querySelector(this._popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._profileForm = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
	}

 /* _getInputValues () {
    inputValues = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
    return inputValues;
  }*/

  setEventListeners () {
     this._profileForm.addEventListener("submit", this._handleFormSubmit);
    this._closeButton.addEventListener("click", (evt) => this.close);
    this._popup.addEventListener("mousedown", (evt) => this._handleClickClose);
  }

  close () {
    super.close();
 //   this(inputValues).reset;
  }

}    