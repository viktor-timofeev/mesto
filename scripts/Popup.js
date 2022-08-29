export class Popup {
	constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._handleEscClose = this._handleEscClose.bind(this);
	}

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._openedPopup = document.querySelector(".popup_opened")
      /*const activePopup = document.querySelector(".popup_opened");*/
      this.close();
  }
}

close() {
  this._popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", this._handleEscClose);
}

  _handleClickClose(evt) {
    if (evt.target === this._popup) { 
        this.close();
      }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", (evt) => this._handleClickClose(evt));
  }
  }
