export class UserInfo {
	constructor(popupSelector) {
    this._popupSelector = popupSelector; 
	}

  open(element) {
    element.classList.add("popup_opened");
    document.addEventListener("keydown", hidePopupByEscape);
  }

  close(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", hidePopupByEscape);
  }

  _handleEscClose(evt, popup) {
    if (evt.key === "Escape") {
      const activePopup = document.querySelector(".popup_opened");
      hidePopup(activePopup);
  }
}

  setEventListeners() {
    buttonsClosePopup.forEach((button) => {
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
  }
}    

/*


   generate = (container) => {
    this._element = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
		this._element.querySelector('.elements__like').addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.elements__trash').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
		}

  _handleLikeCard = (evt) => {
    evt.target.classList.toggle("elements__like_state_active");
  }

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }	
*/