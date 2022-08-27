export class Popup {
	constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
	}

  open() {
    this._popup.classList.add("popup_opened");
  //  document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
  //  document.removeEventListener("keydown", this._handleEscClose);
  }

  /*_handleEscClose(evt) {
    if (evt.key === "Escape") {
      const activePopup = document.querySelector(".popup_opened");
      this.close();
  }
}*/

  setEventListeners() {
    this._popup.querySelector(".popup__close-button").addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", (evt) => 
    {
      if (evt.target.classList.contains('popup_opened')) { 
        this.close();
      }
    })
  
    /*buttonsClosePopup.forEach((button) => {
      const popup = button.closest(".popup");
      button.addEventListener("click", () => hidePopup(popup));
    });

    popups.forEach((popup) => { 
      popup.addEventListener('mousedown', (evt) => { 
        if (evt.target.classList.contains('popup_opened')) { 
          hidePopup(popup); 
        }
      }) 
    })
  }*/
}




}