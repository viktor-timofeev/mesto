import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  submitHandler(submitAction) {
    this._handleFormSubmit = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.onsubmit = (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();
    };
  }

  close() {
    super.close();
  }
}    