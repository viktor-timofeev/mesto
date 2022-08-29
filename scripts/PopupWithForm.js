import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._profileForm = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    
	}

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners () {
    super.setEventListeners();
     this._profileForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._profileForm.reset();
    });
     
     
   //  (evt) => this._handleFormSubmit(evt));
   /* this._closeButton.addEventListener("click", (evt) => this.close);
    this._popup.addEventListener("mousedown", (evt) => this._handleClickClose);*/
  }

  close () {
    super.close();
    this._profileForm.reset();
  }

}    