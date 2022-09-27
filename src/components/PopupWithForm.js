import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._profileForm = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._profileForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setInputValues(data) {

    this._inputList.forEach(input => input.value = data[input.name]);
  }

  setEventListeners() {
    super.setEventListeners();
    this._profileForm.onsubmit = (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    };
  }

  close() {
    super.close();
    this._profileForm.reset();
  }

setButtonText(text) {
  this._submitButton.textContent = text;
}
}