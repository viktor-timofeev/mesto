import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".popup_function_confirm");
    this._submitButton = this._popup.querySelector(".popup__submit-button");
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